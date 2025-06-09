import { beforeEach, describe, expect, it } from 'vitest';
import { useTagStore } from '../model/store';
import { data } from '../model/consts';
import type { TTag } from '../model/types';

describe('useTagStore', () => {
  beforeEach(() => {
    useTagStore.setState({
      tags: data.tags,
      editedTag: undefined,
    });
  });

  it('инициализируется с начальными тегами', () => {
    const tags = useTagStore.getState().tags;
    expect(tags).toBeDefined();
    expect(tags.length).toBeGreaterThan(0);
  });

  it('добавляет новый тег', () => {
    const newTag: TTag = {
      id: 999,
      scheduleId: 1,
      title: 'Новый тег',
      color: 'sky',
      events: [],
    };

    useTagStore.getState().addTag(newTag);
    const tags = useTagStore.getState().tags;

    expect(tags.some((tag) => tag.id === newTag.id)).toBe(true);
  });

  it('удаляет тег', () => {
    const tagToRemove = data.tags[0];
    useTagStore.getState().removeTag(tagToRemove);

    const tags = useTagStore.getState().tags;
    expect(tags.some((tag) => tag.id === tagToRemove.id)).toBe(false);
  });

  it('обновляет тег', () => {
    const tagToUpdate = data.tags[0];
    const newTitle = 'Обновлённый тег';

    useTagStore.getState().updateTag(tagToUpdate, { title: newTitle });
    const tags = useTagStore.getState().tags;
    const updatedTag = tags.find((tag) => tag.id === tagToUpdate.id);

    expect(updatedTag?.title).toBe(newTitle);
  });
});
