/// <reference types="cypress" />Add commentMore actions
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import './commands'

import { mockEventResponse, testEventData, type TestEventData } from '../fixtures/events';
import type { TEvent } from '@/entities/Event/model/types';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Создает новое событие через UI
       * @param eventData Данные события
       */
      createEvent(eventData: TestEventData): Chainable<void>;
      
      /**
       * Проверяет отображение события в календаре
       * @param eventData Данные события для проверки
       */
      verifyEventInCalendar(eventData: TestEventData): Chainable<void>;
      
      /**
       * Мокает API для создания событий
       * @param response Мок ответа
       */
      mockCreateEventApi(response?: TEvent): Chainable<void>;
    }
  }
}

Cypress.Commands.add('createEvent', (eventData: TestEventData) => {
  cy.get('[aria-label="Add event"]').click();
  cy.get('#event-modal-form').should('be.visible');

  // Заполнение формы
  cy.get('input[name="title"]').type(eventData.title);
  cy.get('input[name="date"]').type(eventData.date);
  cy.get('input[name="startTime"]').type(eventData.startTime);
  cy.get('input[name="endTime"]').type(eventData.endTime);

  // Обработка тегов
  if (eventData.tags) {
    eventData.tags.forEach(tag => {
      cy.get('[data-testid="tag-selector"]').click();
      cy.contains(tag.title).click();
    });
  }

  // Отправка формы
  cy.get('#event-modal-form')
    .find('button[type="submit"]')
    .click();
});

Cypress.Commands.add('verifyEventInCalendar', (eventData: TestEventData) => {
  const displayDate = new Date(eventData.date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  cy.contains(displayDate)
    .parents('[data-testid="calendar-day"]')
    .within(() => {
      cy.contains(eventData.title).should('exist');
      cy.contains(`${eventData.startTime}-${eventData.endTime}`).should('exist');
      
      if (eventData.tags) {
        eventData.tags.forEach(tag => {
          cy.contains(tag.title).should('exist');
        });
      }
    });
});

Cypress.Commands.add('mockCreateEventApi', (response?: TEvent) => {
  const mockResponse = response || mockEventResponse(testEventData);
  
  cy.intercept('POST', '/api/events', {
    statusCode: 201,
    body: mockResponse
  }).as('createEvent');
});