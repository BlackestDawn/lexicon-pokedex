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
  const range = 3;
  const startDynamicRange = Math.max(3, currentPage - range);
  const endDynamicRange = Math.min(maxPages - 2, currentPage + range);

  return (
    <ContentContainer className="flex justify-center p-3">
      <Pagination>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious href={`${basePath}?page=${currentPage - 1}`} />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink
              href={`${basePath}?page=1`}
              isActive={currentPage === 1}
            >
              1
            </PaginationLink>
          </PaginationItem>

          {currentPage > 6 ? (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem>
              <PaginationLink
                href={`${basePath}?page=2`}
                isActive={currentPage === 2}
              >
                2
              </PaginationLink>
            </PaginationItem>
          )}

          {[...Array(endDynamicRange - startDynamicRange + 1)].map((_, i) => {
            const page = startDynamicRange + i;
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

          {currentPage < maxPages - 5 ? (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem>
              <PaginationLink
                href={`${basePath}?page=${maxPages - 1}`}
              >
                {`${maxPages - 1}`}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink
              href={`${basePath}?page=${maxPages}`}
              isActive={currentPage === maxPages}
            >
              {maxPages}
            </PaginationLink>
          </PaginationItem>

          {currentPage < maxPages && (
            <PaginationItem>
              <PaginationNext href={`${basePath}?page=${currentPage + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </ContentContainer>
  )
}
