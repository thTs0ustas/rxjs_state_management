import React, { useEffect, useMemo } from 'react';
import { userSelected$, selected$, deckStore$ } from './store';
import styles from './app.module.css';

function App() {
  const [users, setUsers] = React.useState([]);
  const [search, setSearch] = React.useState('');

  useEffect(() => {
    const sub = userSelected$.subscribe(setUsers);
    return () => sub.unsubscribe();
  }, []);

  const filteredUsers = useMemo(
    () =>
      users?.filter((user) =>
        user.first_name.toLowerCase().includes(search.toLowerCase())
      ),
    [users, search]
  );

  const handleChange = (user) => {
    if (selected$.value.includes(user.id)) {
      selected$.next(selected$.value.filter((id) => id !== user.id));
      deckStore$.next(deckStore$.value.filter((deck) => deck.id !== user.id));
    } else {
      selected$.next([...selected$.value, user.id]);
      deckStore$.next([...deckStore$.value, user]);
    }
  };

  // console.log(deckStore$.value);
  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', margin: '10px auto' }}
      />
      <div className={styles.main}>
        <pre className={styles.list}>
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>{user.first_name}</strong>
              <input
                type="checkbox"
                checked={user.selected}
                onChange={() => handleChange(user)}
              />
            </div>
          ))}
        </pre>
        <div>
          {deckStore$.value.map((deck) => (
            <div key={deck.id} className={styles.deck}>
              <strong>{deck.first_name}</strong>
              <em>{deck.email}</em>
              <em>{deck.gender}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
