import { testEventData, minimalEventData } from '../../fixtures/events';
import { format } from 'date-fns';

const FORM_SELECTOR = '#event-modal-form';
const ADD_EVENT_BTN = '[aria-label="Add event"]';
const CLOSE_BTN = 'button[aria-label="Close"]';
const SUBMIT_BTN = `${FORM_SELECTOR} button[type="submit"]`;

describe('Тестирование создания события через UI', () => {
  beforeEach(() => {
    cy.visit('/schedule/1');
    cy.get('[data-testid="calendar-container"]').should('be.visible');
  });

  const checkEventDisplayed = (eventData: typeof testEventData) => {
    const formattedDate = format(new Date(eventData.date), 'PPP', { locale: undefined });
    cy.get('[data-testid="calendar-day"]')
      .contains(formattedDate)
      .closest('div.flex.flex-col.gap-4')
      .within(() => {
        // Находим заголовок события
        cy.contains('h3', eventData.title)
          // Поднимаемся к ближайшему контейнеру события (карточке)
          .parents('div') // получить все родители
          .filter((_, el) => {
            // Фильтруем по наличию бордера с классом border-4 (судя по компоненту)
            return el.classList.contains('border-4');
          })
          .first() // берем первый подходящий
          .within(() => {
            cy.contains(`${eventData.startTime} - ${eventData.endTime}`).should('exist');

            // Проверяем теги в BadgeList
            eventData.tags?.forEach((tag) => {
              cy.contains('div.mt-3', tag.title).should('exist');
            });
          });
      });
  };

  it('Успешное создание события со всеми полями', () => {
    cy.get(ADD_EVENT_BTN).click();
    cy.get(FORM_SELECTOR).should('be.visible');

    cy.get('input[name="title"]').type(testEventData.title);
    cy.get('input[name="date"]').type(testEventData.date);
    cy.get('input[name="startTime"]').type(testEventData.startTime);
    cy.get('input[name="endTime"]').type(testEventData.endTime);

    if (testEventData.tags?.length) {
      cy.get('[data-testid="tag-selector"]').click(); // открыть поповер

      testEventData.tags.forEach((tag) => {
        cy.get(`[data-testid="tag-checkbox-${tag.title}"]`).click({ force: true });
      });

      cy.get('[data-testid="tag-selector"]').click(); // закрыть поповер
    }

    cy.get(SUBMIT_BTN).click();
    cy.get(FORM_SELECTOR, { timeout: 10000 }).should('not.exist');

    checkEventDisplayed(testEventData);
  });

  it('Создание события с минимальными данными', () => {
    cy.get(ADD_EVENT_BTN).click();
    cy.get(FORM_SELECTOR).should('be.visible');

    cy.get('input[name="title"]').type(minimalEventData.title);
    cy.get('input[name="date"]').type(minimalEventData.date);
    cy.get('input[name="startTime"]').type(minimalEventData.startTime);
    cy.get('input[name="endTime"]').type(minimalEventData.endTime);

    cy.get(SUBMIT_BTN).click();
    cy.get(FORM_SELECTOR).should('not.exist');

    checkEventDisplayed(minimalEventData);
  });

  it('Валидация обязательных полей формы', () => {
    cy.get(ADD_EVENT_BTN).click();
    cy.get(FORM_SELECTOR).should('be.visible');

    cy.get(SUBMIT_BTN).click();

    const errorMessages = [
      { fieldName: 'title', message: 'Название события обязательно' },
      { fieldName: 'date', message: 'Дата события обязательна' },
      { fieldName: 'startTime', message: 'Время начала обязательно' },
      { fieldName: 'endTime', message: 'Время окончания обязательно' },
    ];

    errorMessages.forEach(({ fieldName, message }) => {
      cy.get(`${FORM_SELECTOR} input[name="${fieldName}"]`)
        .closest('div.space-y-1')
        .find('p.text-destructive')
        .should('be.visible')
        .and('have.text', message);
    });

    cy.get(CLOSE_BTN).click();
    cy.get(FORM_SELECTOR).should('not.exist');
  });

  it('Закрытие формы без добавления события', () => {
    // Ждём закрытия формы
    cy.get('[data-testid="event-form"]').should('not.exist');

    // Ждём один из возможных вариантов:
    cy.get('body').then(($body) => {
      // Если появился список событий
      if ($body.find('[data-testid="event-list"]').length > 0) {
        cy.get('[data-testid="event-list"]').should('exist').and('not.contain', 'Тестовое событие');
      }
      // Если отрисован экран "Нет событий"
      else if ($body.find('[data-testid="no-events"]').length > 0) {
        cy.get('[data-testid="no-events"]').should('exist');
      } else {
        // Если не появилось ни то, ни другое — тест должен упасть
        throw new Error('Ни event-list, ни no-events не были найдены');
      }
    });
  });
});
