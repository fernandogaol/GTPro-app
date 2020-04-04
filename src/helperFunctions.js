export const findProject = (projects = [], projectId) =>
  projects.find(project => project.id === projectId);

export const findList = (lists = [], listId) =>
  lists.find(list => list.project_id === listId);

export const getListsForProjects = (lists = [], projectId) =>
  !projectId ? lists : lists.filter(list => list.project_id === projectId);
