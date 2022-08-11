import { BehaviorSubject, combineLatestWith, map } from 'rxjs';
import axios from 'axios';

const store$ = new BehaviorSubject([]);
const deckStore$ = new BehaviorSubject([]);
const selected$ = new BehaviorSubject([]);

axios.get('./DATA.json').then(({ data }) => store$.next(data));

const userStore$ = store$.pipe(
  map((users) => users.filter((user) => user.id <= 100))
);

const userSelected$ = userStore$.pipe(
  combineLatestWith(selected$),
  map(([users, selected]) =>
    users.map((user) => ({ ...user, selected: selected.includes(user.id) }))
  )
);

deckStore$.subscribe(console);

export { userSelected$, userStore$, selected$, deckStore$ };
