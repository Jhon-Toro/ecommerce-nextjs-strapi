import { ELLIPSIS, MAX_PAGES_TO_SHOW } from "../constants/Pagination.contants";
import { PageElement } from "../interfaces/Pagination/Pagination.interface";

export const goToPreviousPage = (currentPage: number, onPageChange: (page: number) => void) => {
  if (currentPage > 1) onPageChange(currentPage - 1);
};

export const goToNextPage = (currentPage: number, totalPages: number, onPageChange: (page: number) => void) => {
  if (currentPage < totalPages) onPageChange(currentPage + 1);
};

export const getPageRange = (currentPage: number, totalPages: number): { startPage: number; endPage: number } => {
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);
  return { startPage, endPage };
};

export const generatePageElements = (currentPage: number, totalPages: number, onPageChange: (page: number) => void): PageElement[] => {
  const elements: PageElement[] = [];
  const { startPage, endPage } = getPageRange(currentPage, totalPages);

  if (totalPages <= MAX_PAGES_TO_SHOW) {
    for (let i = 1; i <= totalPages; i++) {
      elements.push({
        key: i,
        content: i,
        isActive: currentPage === i,
        onClick: () => onPageChange(i),
      });
    }
    return elements;
  }

  elements.push({
    key: 1,
    content: 1,
    isActive: currentPage === 1,
    onClick: () => onPageChange(1),
  });

  if (startPage > 2) elements.push({ key: 'start-ellipsis', content: ELLIPSIS, isEllipsis: true });
  
  for (let i = startPage; i <= endPage; i++) {
    if (i !== 1 && i !== totalPages) {
      elements.push({
        key: i,
        content: i,
        isActive: currentPage === i,
        onClick: () => onPageChange(i),
      });
    }
  }

  if (endPage < totalPages - 1) elements.push({ key: 'end-ellipsis', content: ELLIPSIS, isEllipsis: true });


  elements.push({
    key: totalPages,
    content: totalPages,
    isActive: currentPage === totalPages,
    onClick: () => onPageChange(totalPages),
  });

  return elements;
};