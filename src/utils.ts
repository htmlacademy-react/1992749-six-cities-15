export const getNewStr = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getRoundNumber = (rating: number) => `${String(Math.round(rating) * 2)}`;

/**
<button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
<svg className="place-card__bookmark-icon" width="18" height="19">
<use xlinkHref="#icon-bookmark"></use>
</svg>
<span className="visually-hidden">In bookmarks</span>
</button>
 */

/*
<button class="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
<svg class="place-card__bookmark-icon" width="18" height="19">
<use xlink:href="#icon-bookmark"></use>
</svg>
<span class="visually-hidden">In bookmarks</span>
</button>
*/
