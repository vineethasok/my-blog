<script>
  export let currentPage = 1, lastPage, url;
  export let pageType = "query";
  let findPageParam = (pageNumber) => {
    if (pageType == "query") {
      return `?page=${pageNumber}`;
    }
    return `/${pageNumber}`;
  }
  let isFirstPage = currentPage == 1;
  let isLastPage = currentPage == lastPage;
  let pages = [];
  if (lastPage <= 5 && lastPage != 2) {
    for (let i = 2; i < lastPage; i++) {
      pages.push(i);
    }
  } else if (lastPage != 2) {
    pages.push(currentPage)
    if (!isFirstPage && currentPage - 1 != 1) {
      pages.unshift(currentPage - 1)
    }
    if (!isLastPage && lastPage != currentPage + 1) {
      pages.push(currentPage + 1)
    }
  }
</script>
<style>
  .pagination {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pagination a,
  span {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border: 1px solid #ddd;
  }

  .pagination a.active {
    background-color: #8b4513;
    color: white;
    border: 1px solid #8b4513;
    cursor: not-allowed;
    pointer-events: none;
  }

  .disabled {
    cursor: not-allowed !important;
    pointer-events: none !important;
    opacity: 0.5;
  }

  .pagination a:hover:not(.active) {
    background-color: #ddd;
  }

  .pagination a:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin: 0 4px;
  }

  .pagination a:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin: 0 4px;
  }
</style>

<div class="pagination">
  <a href="{url}" rel="prefetch" class='{isFirstPage ? "disabled" : ""}'>&laquo;</a>
  <a href="{url}" rel="prefetch" class='{isFirstPage ? "active" : undefined}'>1</a>
  {#if !isFirstPage && currentPage != 2}
    <span>...</span>
  {/if}
  {#each pages as page}
  <a href="{url}{findPageParam(page)}" rel="prefetch" class='{(currentPage === page) ? "active" : undefined}'>{page}</a>
  {/each}
  {#if !isLastPage && currentPage != lastPage - 1}
    <span>...</span>
  {/if}
  {#if lastPage != 1}
    <a href="{url}{findPageParam(lastPage)}" rel="prefetch" class='{isLastPage ? "active" : undefined}'>{lastPage}</a>
  {/if}
  <a href="{url}{findPageParam(lastPage)}" class='{isLastPage || lastPage == 1 ? "disabled" : ""}'>&raquo;</a>
</div>