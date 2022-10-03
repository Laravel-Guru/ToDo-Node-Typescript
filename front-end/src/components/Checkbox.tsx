import { cn } from 'lib/utils'
import CheckIcon from 'images/icon-check.svg'

interface Props
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Checkbox = ({ className, ...props }: Props) => {
  return (
    <div className={cn('group relative w-6 h-6', className)}>
      <input
        type='checkbox'
        className='peer absolute z-10 opacity-0 w-full h-full cursor-pointer'
        {...props}
      />
      <div className='h-full rounded-full bg-light-grayish-blue-200 dark:bg-dark-grayish-blue-400 group-hover:bg-checked peer-checked:bg-checked'></div>
      <div className='inset-[2px] absolute bg-white dark:bg-dark-desaturated-blue peer-checked:bg-checked rounded-full'></div>
      <img
        className='hidden peer-checked:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        src={CheckIcon}
        alt='check-icon'
      />
    </div>
  )
}

export default Checkbox