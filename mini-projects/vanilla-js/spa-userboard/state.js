export const state = {
  users: [
    { id: 1, name: '홍길동' },
    { id: 2, name: '김철수' },
  ],
};

export function addUser(name) {
  const id = Date.now();
  state.users.push({ id, name });
}
