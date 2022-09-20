import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ 
  isCurrent = false, 
  number,
  onPageChange
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button 
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="purple"
        disabled
        _disabled={{
          bgColor: 'purple.500',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    )
  } else {
    return (
      <Button 
        size="sm"
        fontSize="xs"
        w="4"
        bg="gray.700"
        _hover={{
          bg: 'gray.500'
        }}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Button>
    )
  }
}