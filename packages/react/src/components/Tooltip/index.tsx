import { ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { StyledArrow, TooltipContent } from './styles'

export interface TooltipProps {
  children?: ReactNode
}

export function Tooltip({ children }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger />
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5}>
            <StyledArrow />
            {children}
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
