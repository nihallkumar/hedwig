
# Search field

The search field displays results and a rotating placeholder when the field is not populated.

NB: The search field position and the opaque background overlay is not controlled by the search field code.

```code
[data-hw-search]                Attaches functionality  (required)
[data-hw-search-placeholders]   Array of placeholders   (required)
```

### Default search

```html
<div class="hw-search"
  data-hw-search
  data-hw-search-placeholders='["Søk etter pakke", "Eks.: 1212012381238123", "Eller på nettstedet", "Eks.: Bedriftspakke"]'
>
  <div class="hw-search__inner">
    <input
      data-hw-search-input
      class="hw-search__input" type="text" />
    <svg class="hw-search__icon">
      <use xlink:href="#search"></use>
    </svg>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
</div>
```

### Search with single placeholder (no rotation)

```html
<div class="hw-search"
  data-hw-search
  data-hw-search-placeholders='["Hi!"]'
>
  <div class="hw-search__inner">
    <input
      data-hw-search-input
      class="hw-search__input" type="text" />
    <svg class="hw-search__icon">
      <use xlink:href="#search"></use>
    </svg>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
</div>
```