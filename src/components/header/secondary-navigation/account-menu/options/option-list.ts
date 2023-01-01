export interface IOptions {
  id: number;
  icon: string;
  title: string;
}

export const profileList: IOptions[] = [
  { id: 0, icon: '/avatar-penguin.png', title: 'Pingu, the penguin' },
  { id: 1, icon: '/avatar-jinx.png', title: 'Jinx' },
  { id: 2, icon: '/avatar-elfo.png', title: 'Elfo' },
  // { id: 3, icon: '/avatar-cookie.png', title: 'Just some cookie' }
]

export const optionList: IOptions[] = [
  { id: 0, icon: 'edit', title: 'Manage Profiles' },
  { id: 1, icon: 'co_present', title: 'Transfer Profile' },
  { id: 2, icon: 'person', title: 'Account' },
  { id: 3, icon: 'help_outline', title: 'Help Center' },
]
