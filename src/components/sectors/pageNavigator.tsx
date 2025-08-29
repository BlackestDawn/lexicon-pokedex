import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import ContentContainer from "@/components/parts/contentContainer";

interface PageNavigatorProps {
  basePath: string;
  currentPage: number;
  maxPages: number;
}

export default function PageNavigator({ basePath, currentPage = 1, maxPages = 1 }: PageNavigatorProps) {
  const showPreviousNext = maxPages > 7;
  const range = 3;
  let startPage = Math.max(1, currentPage - range);
  let endPage = Math.min(maxPages, currentPage + range);

  if (endPage - startPage + 1 < 7) {
    if (startPage === 1) {
      endPage = Math.min(maxPages, startPage + range);
    } else if (endPage === maxPages) {
      startPage = Math.max(1, endPage - range);
    }
  }

  const showFirstPage = startPage > 2;
  const showLastPage = endPage < maxPages - 1;
  const showStartEllipsis = startPage > 2;
  const showEndEllipsis = endPage < maxPages - 1;

  if (showFirstPage) startPage = Math.max(startPage, 4);

  if (showLastPage) endPage = Math.min(endPage, maxPages - 3);

  return (
    <ContentContainer className="flex justify-center p-3">
      <Pagination>
        <PaginationContent>
          {currentPage > 1 && showPreviousNext && (
            <PaginationItem>
              <PaginationPrevious href={`${basePath}?page=${currentPage - 1}`} />
            </PaginationItem>
          )}

          {showFirstPage && (
            <PaginationItem>
              <PaginationLink
                href={`${basePath}?page=1`}
                isActive={currentPage === 1}
              >
                1
              </PaginationLink>
            </PaginationItem>
          )}

          {showStartEllipsis && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {[...Array(endPage - startPage + 1)].map((_, i) => {
            const page = startPage + i;
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href={`${basePath}?page=${page}`}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {showEndEllipsis && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {showLastPage && (
            <PaginationItem>
              <PaginationLink
                href={`${basePath}?page=${maxPages}`}
                isActive={currentPage === maxPages}
              >
                {maxPages}
              </PaginationLink>
            </PaginationItem>
          )}

          {currentPage < maxPages && showPreviousNext && (
            <PaginationItem>
              <PaginationNext href={`${basePath}?page=${currentPage + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </ContentContainer>
  )
}
