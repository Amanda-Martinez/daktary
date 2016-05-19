/**
 * Layout for manage and display Github repositories.
 *
 */
{
  layout.create('searchList')
  layout.searchList.html(`
  <header>
    <h1><a href="">multi<span>BàO</span></a></h1>
    <div id="search-engine-wrapper" class="search-engine-wrapper" data-template="search">
    </div>
  </header>
  <main>
    <section id="gh-list" class="gh-list" data-template="searchList">
    </section>
  </main>`)
}
