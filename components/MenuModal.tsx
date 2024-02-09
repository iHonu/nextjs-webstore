// MenuModal.js
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Category } from '@/app/intarface';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
}

export default function MenuModal({
  isOpen,
  onClose,
  categories,
}: MenuModalProps) {
    return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-md w-[80vw]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 p-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/${category.name}`} 
              className="text-lg font-medium hover:text-primary"
              onClick={onClose}
            >
              {category.name} 
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
