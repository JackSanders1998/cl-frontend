// This file is auto-generated by @hey-api/openapi-ts

export type Attempt = 'onsight' | 'flash' | 'redpoint' | 'fall';

export const Attempt = {
	ONSIGHT: 'onsight',
	FLASH: 'flash',
	REDPOINT: 'redpoint',
	FALL: 'fall'
} as const;

export type CreateLocation = {
	author: string;
	description?: string | null;
	environment: Environment;
	name: string;
};

export type CreatePreference = {
	boulder_scale: string;
	color_scheme: string;
	sport_scale: string;
	theme: string;
};

export type CreateRoute = {
	author: string;
	description?: string | null;
	disciplines: Array<Discipline>;
	grade: string;
	location_id: string;
	scale: Scale;
};

export type CreateSesh = {
	location_id: string;
	notes?: string | null;
};

export type CreateTick = {
	attempt: Attempt;
	discipline: Discipline;
	lap_group?: string | null;
	notes?: string | null;
	route_id: string;
	sesh_id: string;
};

export type Discipline = 'boulder' | 'sport' | 'top_rope';

export const Discipline = {
	BOULDER: 'boulder',
	SPORT: 'sport',
	TOP_ROPE: 'top_rope'
} as const;

export type Environment = 'gym' | 'outdoor';

export const Environment = {
	GYM: 'gym',
	OUTDOOR: 'outdoor'
} as const;

export type Location = {
	author: string;
	created_at: Date;
	description?: string | null;
	environment: Environment;
	location_id: string;
	name: string;
	updated_at: Date;
};

export type LocationSearchParams = {
	name?: string | null;
};

export type Preference = {
	boulder_scale: string;
	color_scheme: string;
	created_at: Date;
	preference_id: string;
	sport_scale: string;
	theme: string;
	updated_at: Date;
	user_id: string;
};

export type Route = {
	author: string;
	created_at: Date;
	description?: string | null;
	disciplines: Array<Discipline>;
	grade: string;
	location_id: string;
	route_id: string;
	scale: Scale;
	updated_at: Date;
};

export type RouteWithLocation = {
	author: string;
	created_at: Date;
	description?: string | null;
	disciplines: Array<Discipline>;
	grade: string;
	location: Location;
	route_id: string;
	scale: Scale;
	updated_at: Date;
};

export type RouteWithLocationSqlx = {
	author: string;
	created_at: Date;
	description?: string | null;
	disciplines: Array<Discipline>;
	environment: Environment;
	grade: string;
	location_author: string;
	location_created_at: Date;
	location_description?: string | null;
	location_id: string;
	location_updated_at: Date;
	name: string;
	route_id: string;
	scale: Scale;
	updated_at: Date;
};

export type Scale = 'verm' | 'font' | 'yosemite' | 'french';

export const Scale = {
	VERM: 'verm',
	FONT: 'font',
	YOSEMITE: 'yosemite',
	FRENCH: 'french'
} as const;

export type SeshRow = {
	created_at: Date;
	end?: Date | null;
	location_id: string;
	notes?: string | null;
	sesh_id: string;
	start: Date;
	updated_at: Date;
	user_id: string;
};

export type SeshWithLocation = {
	created_at: Date;
	end?: Date | null;
	location: Location;
	notes?: string | null;
	sesh_id: string;
	start: Date;
	updated_at: Date;
	user_id: string;
};

export type SeshWithLocationAndTicks = {
	created_at: Date;
	end?: Date | null;
	location: Location;
	notes?: string | null;
	sesh_id: string;
	start: Date;
	ticks: Array<TickWithRoute>;
	updated_at: Date;
	user_id: string;
};

export type SeshWithLocationSqlx = {
	author: string;
	created_at: Date;
	description?: string | null;
	end?: Date | null;
	environment: Environment;
	location_created_at: Date;
	location_id: string;
	location_updated_at: Date;
	name: string;
	notes?: string | null;
	sesh_id: string;
	start: Date;
	updated_at: Date;
	user_id: string;
};

export type TickRow = {
	attempt: Attempt;
	created_at: Date;
	discipline: Discipline;
	lap_group?: string | null;
	notes?: string | null;
	route_id: string;
	sesh_id: string;
	tick_id: string;
	updated_at: Date;
};

export type TickSearchParams = {
	sesh_id: string;
};

export type TickWithRoute = {
	attempt: Attempt;
	created_at: Date;
	discipline: Discipline;
	lap_group?: string | null;
	notes?: string | null;
	route: RouteWithLocation;
	route_id: string;
	sesh_id: string;
	tick_id: string;
	updated_at: Date;
};

export type TickWithRouteSqlx = {
	attempt: Attempt;
	author: string;
	created_at: Date;
	description?: string | null;
	discipline: Discipline;
	disciplines: Array<Discipline>;
	environment: Environment;
	grade: string;
	lap_group?: string | null;
	location_author: string;
	location_created_at: Date;
	location_description?: string | null;
	location_id: string;
	location_updated_at: Date;
	name: string;
	notes?: string | null;
	route_created_at: Date;
	route_id: string;
	route_updated_at: Date;
	scale: Scale;
	sesh_id: string;
	tick_id: string;
	updated_at: Date;
};

export type UpdateLocation = {
	description?: string | null;
	environment?: Environment | null;
	name?: string | null;
};

export type UpdatePreference = {
	boulder_scale?: string | null;
	color_scheme?: string | null;
	sport_scale?: string | null;
	theme?: string | null;
};

export type UpdateRoute = {
	description?: string | null;
	disciplines?: Array<Discipline> | null;
	grade?: string | null;
	scale?: Scale | null;
};

export type UpdateSesh = {
	end_session?: boolean | null;
	location_id?: string | null;
	notes?: string | null;
};

export type HealthCheckData = {
	body?: never;
	path?: never;
	query?: never;
	url: '/healthcheck';
};

export type HealthCheckResponses = {
	/**
	 * Hit cl-backend succesfully
	 */
	200: unknown;
};

export type SearchLocationsData = {
	body?: never;
	path?: never;
	query?: {
		name?: string | null;
	};
	url: '/locations';
};

export type SearchLocationsErrors = {
	/**
	 * No location found
	 */
	404: unknown;
};

export type SearchLocationsResponses = {
	/**
	 * Get location(s) successfully
	 */
	200: Array<Location>;
};

export type SearchLocationsResponse = SearchLocationsResponses[keyof SearchLocationsResponses];

export type CreateLocationData = {
	body: CreateLocation;
	path?: never;
	query?: never;
	url: '/locations';
};

export type CreateLocationErrors = {
	/**
	 * Location was not created
	 */
	500: unknown;
};

export type CreateLocationResponses = {
	/**
	 * Create a location
	 */
	201: Location;
};

export type CreateLocationResponse = CreateLocationResponses[keyof CreateLocationResponses];

export type DeleteLocationByLocationIdData = {
	body?: never;
	path: {
		/**
		 * location id
		 */
		location_id: string;
	};
	query?: never;
	url: '/locations/{location_id}';
};

export type DeleteLocationByLocationIdErrors = {
	/**
	 * Location was not deleted
	 */
	500: unknown;
};

export type DeleteLocationByLocationIdResponses = {
	/**
	 * Delete a location
	 */
	204: void;
};

export type DeleteLocationByLocationIdResponse =
	DeleteLocationByLocationIdResponses[keyof DeleteLocationByLocationIdResponses];

export type GetLocationByLocationIdData = {
	body?: never;
	path: {
		/**
		 * location id
		 */
		location_id: string;
	};
	query?: never;
	url: '/locations/{location_id}';
};

export type GetLocationByLocationIdErrors = {
	/**
	 * Location was not found
	 */
	404: unknown;
};

export type GetLocationByLocationIdResponses = {
	/**
	 * Get a location successfully
	 */
	200: Location;
};

export type GetLocationByLocationIdResponse =
	GetLocationByLocationIdResponses[keyof GetLocationByLocationIdResponses];

export type UpdateLocationByLocationIdData = {
	body: UpdateLocation;
	path: {
		/**
		 * location id
		 */
		location_id: string;
	};
	query?: never;
	url: '/locations/{location_id}';
};

export type UpdateLocationByLocationIdErrors = {
	/**
	 * Location was not updated
	 */
	500: unknown;
};

export type UpdateLocationByLocationIdResponses = {
	/**
	 * Update location successfully
	 */
	200: Location;
};

export type UpdateLocationByLocationIdResponse =
	UpdateLocationByLocationIdResponses[keyof UpdateLocationByLocationIdResponses];

export type SearchRoutesData = {
	body?: never;
	path?: never;
	query?: never;
	url: '/routes';
};

export type SearchRoutesErrors = {
	/**
	 * No route found
	 */
	404: unknown;
};

export type SearchRoutesResponses = {
	/**
	 * Get route(s) successfully
	 */
	200: Array<Route>;
};

export type SearchRoutesResponse = SearchRoutesResponses[keyof SearchRoutesResponses];

export type CreateRouteData = {
	body: CreateRoute;
	path?: never;
	query?: never;
	url: '/routes';
};

export type CreateRouteErrors = {
	/**
	 * Route was not created
	 */
	500: unknown;
};

export type CreateRouteResponses = {
	/**
	 * Create a route
	 */
	201: Route;
};

export type CreateRouteResponse = CreateRouteResponses[keyof CreateRouteResponses];

export type DeleteRouteData = {
	body?: never;
	path: {
		/**
		 * route id
		 */
		route_id: string;
	};
	query?: never;
	url: '/routes/{route_id}';
};

export type DeleteRouteErrors = {
	/**
	 * Route was not deleted
	 */
	500: unknown;
};

export type DeleteRouteResponses = {
	/**
	 * Delete a route
	 */
	204: void;
};

export type DeleteRouteResponse = DeleteRouteResponses[keyof DeleteRouteResponses];

export type GetRouteByRouteIdData = {
	body?: never;
	path: {
		/**
		 * route id
		 */
		route_id: string;
	};
	query?: never;
	url: '/routes/{route_id}';
};

export type GetRouteByRouteIdErrors = {
	/**
	 * Route was not found
	 */
	404: unknown;
};

export type GetRouteByRouteIdResponses = {
	/**
	 * Get a route successfully
	 */
	200: RouteWithLocation;
};

export type GetRouteByRouteIdResponse =
	GetRouteByRouteIdResponses[keyof GetRouteByRouteIdResponses];

export type SearchSeshesData = {
	body?: never;
	path?: never;
	query?: never;
	url: '/seshes';
};

export type SearchSeshesErrors = {
	/**
	 * No sesh found
	 */
	404: unknown;
};

export type SearchSeshesResponses = {
	/**
	 * Get sesh(es) successfully
	 */
	200: Array<SeshWithLocation>;
};

export type SearchSeshesResponse = SearchSeshesResponses[keyof SearchSeshesResponses];

export type CreateSeshData = {
	body: CreateSesh;
	path?: never;
	query?: never;
	url: '/seshes';
};

export type CreateSeshErrors = {
	/**
	 * Sesh was not created
	 */
	500: unknown;
};

export type CreateSeshResponses = {
	/**
	 * Create a sesh
	 */
	201: SeshWithLocation;
};

export type CreateSeshResponse = CreateSeshResponses[keyof CreateSeshResponses];

export type GetActiveSeshData = {
	body?: never;
	path?: never;
	query?: never;
	url: '/seshes/active';
};

export type GetActiveSeshErrors = {
	/**
	 * No active sesh found
	 */
	404: unknown;
};

export type GetActiveSeshResponses = {
	/**
	 * Get the active successfully
	 */
	200: SeshWithLocation;
};

export type GetActiveSeshResponse = GetActiveSeshResponses[keyof GetActiveSeshResponses];

export type DeleteSeshData = {
	body?: never;
	path: {
		/**
		 * sesh id
		 */
		sesh_id: string;
	};
	query?: never;
	url: '/seshes/{sesh_id}';
};

export type DeleteSeshErrors = {
	/**
	 * Sesh was not deleted
	 */
	500: unknown;
};

export type DeleteSeshResponses = {
	/**
	 * Delete a sesh
	 */
	204: void;
};

export type DeleteSeshResponse = DeleteSeshResponses[keyof DeleteSeshResponses];

export type GetSeshBySeshIdData = {
	body?: never;
	path: {
		/**
		 * sesh id
		 */
		sesh_id: string;
	};
	query?: never;
	url: '/seshes/{sesh_id}';
};

export type GetSeshBySeshIdErrors = {
	/**
	 * Sesh was not found
	 */
	404: unknown;
};

export type GetSeshBySeshIdResponses = {
	/**
	 * Get a sesh successfully
	 */
	200: SeshWithLocationAndTicks;
};

export type GetSeshBySeshIdResponse = GetSeshBySeshIdResponses[keyof GetSeshBySeshIdResponses];

export type UpdateSeshBySeshIdData = {
	body: UpdateLocation;
	path: {
		/**
		 * sesh id
		 */
		sesh_id: string;
	};
	query?: never;
	url: '/seshes/{sesh_id}';
};

export type UpdateSeshBySeshIdErrors = {
	/**
	 * Sesh was not updated
	 */
	500: unknown;
};

export type UpdateSeshBySeshIdResponses = {
	/**
	 * Update sesh successfully
	 */
	200: SeshRow;
};

export type UpdateSeshBySeshIdResponse =
	UpdateSeshBySeshIdResponses[keyof UpdateSeshBySeshIdResponses];

export type SearchTicksData = {
	body?: never;
	path?: never;
	query: {
		sesh_id: string;
	};
	url: '/ticks';
};

export type SearchTicksErrors = {
	/**
	 * No tick found
	 */
	404: unknown;
};

export type SearchTicksResponses = {
	/**
	 * Get tick(s) successfully
	 */
	200: Array<TickWithRoute>;
};

export type SearchTicksResponse = SearchTicksResponses[keyof SearchTicksResponses];

export type CreateTickData = {
	body: CreateTick;
	path?: never;
	query?: never;
	url: '/ticks';
};

export type CreateTickErrors = {
	/**
	 * Tick was not created
	 */
	500: unknown;
};

export type CreateTickResponses = {
	/**
	 * Create a tick
	 */
	201: CreateTick;
};

export type CreateTickResponse = CreateTickResponses[keyof CreateTickResponses];

export type ClientOptions = {
	baseUrl: 'http://127.0.0.1:8000' | (string & {});
};
