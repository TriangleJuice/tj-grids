# TriangleJuice Grids

Simple responsive grids created with Singularity.

## How to install

1. Install with bower (or clone this repo)

	```
	bower install TriangleJuice/tj-grids
	```

2. Load partial in your SASS setup

	```
	@import "path/to/bower_components/tj-grid/scss/trianglejuice-grid-full";
	```

	Alternatively, use one of the smaller versions:

	```
	@import "path/to/bower_components/tj-grid/scss/trianglejuice-grid-basic";
	@import "path/to/bower_components/tj-grid/scss/trianglejuice-grid-minimum";
	```

	Note: CSS versions are also included if you don't want to use SASS.

## Features

- mobile-first
- 12 columns
- nesting columns
- breakpoints at 640px (tablet) and 960px (desktop)

## How to use

Start with a container:

```
<div class="c"></div>
```

Inside a container, you can have multiple rows:

```
<div class="g"></div>
```

Inside a row, divide your columns as follows:

-	Basic syntax (will apply to all media):
	`g-{column span}-{start column}`

-	Tablet syntax (will apply to 640px and up):
	`t--g-{column span}-{start column}`

-	Desktop syntax (will apply to 960px and up):
	`d--g-{column span}-{start column}`

All together:

```
<div class="c">
	<div class="g">
		<div class="g-6-1">
			Left column
		</div>
		<div class="g-6-7">
			Right column
		</div>
	</div>
</div>
```

## Simple examples

Span the first 6 columns:

```
<div class="g-6-1"></div>
```

Span the middle 6 columns:

```
<div class="g-6-4"></div>
```

Span the middle 4 columns on desktop:

```
<div class="d--g-4-5"></div>
```

Span 8 columns on mobile starting from column 4, 7 columns on tablet starting from column 5 and 4 columns on desktop starting from column 7:

```
<div class="g-8-4 t--g-7-5 d--g-4-7"></div>
```

## Advanced example, with nesting

```
<div class="c">
	<div class="g">
		<div class="g-6-1 t--g-8-1 d--g-9-1">
			<div class="g">
				<div class="g-4-2">
					Left column 1 with more spacing
				</div>
				<div class="g-4-8">
					Left column 2 with more spacing
				</div>
			</div>
		</div>
		<div class="g-6-7 t--g-4-9 d--g-3-10">
			Right column
		</div>
	</div>
</div>
```

Always welcome to send feedback!
