import { User } from '../models/User'

test('it shold be ok', () => {
  const user = new User()

  user.name = 'Henrique'

  expect(user.name).toEqual('Henrique')
})
