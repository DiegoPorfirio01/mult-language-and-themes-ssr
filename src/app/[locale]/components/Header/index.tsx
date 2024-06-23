'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'
import LogoIcon from '../../../icons/logo'
import LangSwitcher from '../LangSwitcher'
import ThemeSwitch from '../ThemeSwitch'
import { Button } from '@/components/ui/button'
import { FiMenu } from 'react-icons/fi'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-14 w-14'>
            <LogoIcon />
          </div>
          <strong className='mx-2 select-none hidden lg:block'>Squid</strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='hidden lg:inline-flex mr-10 gap-5'>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <Link lang={locale} href={`/support`}>
            {t('Support')}
          </Link>
          <Link lang={locale} href={`/other`}>
            {t('Other')}
          </Link>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
        <Sheet>
          <SheetTrigger asChild>
          <Button className='lg:hidden bg-button text-button-text'>
          <FiMenu/>
        </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className='h-full'>
              <SheetTitle>Squid</SheetTitle>
              <SheetDescription className='flex flex-col items-start gap-2 mt-'>
              <SheetClose asChild>
                <Link lang={locale} href={`/`} className='bg-button font-medium text-button-text p-1 w-full rounded-lg'>
                  {t('Home')}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link lang={locale} href={`/about`} className='bg-button font-medium text-button-text p-1 w-full rounded-lg'>
                  {t('About')}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link lang={locale} href={`/support`} className='bg-button font-medium text-button-text p-1 w-full rounded-lg'>
                  {t('Support')}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link lang={locale} href={`/other`} className='bg-button font-medium text-button-text p-1 w-full rounded-lg'>
                  {t('Other')}
                </Link>
              </SheetClose>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
