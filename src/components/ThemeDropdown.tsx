import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { MoonIcon, SunIcon } from './ui/icons'

export default function ThemeDropdown() {
  const onClickLight = () => {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }

  const onClickDark = () => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onClickLight}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={onClickDark}>Dark</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
