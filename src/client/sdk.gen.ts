// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type {
	HealthCheckData,
	SearchLocationsData,
	SearchLocationsResponse,
	CreateLocationData,
	CreateLocationResponse,
	DeleteLocationByLocationIdData,
	DeleteLocationByLocationIdResponse,
	GetLocationByLocationIdData,
	GetLocationByLocationIdResponse,
	UpdateLocationByLocationIdData,
	UpdateLocationByLocationIdResponse,
	SearchRoutesData,
	SearchRoutesResponse,
	CreateRouteData,
	CreateRouteResponse,
	DeleteRouteData,
	DeleteRouteResponse,
	GetRouteByRouteIdData,
	GetRouteByRouteIdResponse,
	SearchSeshesData,
	SearchSeshesResponse,
	CreateSeshData,
	CreateSeshResponse,
	GetActiveSeshData,
	GetActiveSeshResponse,
	DeleteSeshData,
	DeleteSeshResponse,
	GetSeshBySeshIdData,
	GetSeshBySeshIdResponse,
	UpdateSeshBySeshIdData,
	UpdateSeshBySeshIdResponse,
	SearchTicksData,
	SearchTicksResponse,
	CreateTickData,
	CreateTickResponse
} from './types.gen';
import { client as _heyApiClient } from './client.gen';

export type Options<
	TData extends TDataShape = TDataShape,
	ThrowOnError extends boolean = boolean
> = ClientOptions<TData, ThrowOnError> & {
	/**
	 * You can provide a client instance returned by `createClient()` instead of
	 * individual options. This might be also useful if you want to implement a
	 * custom client.
	 */
	client?: Client;
	/**
	 * You can pass arbitrary values through the `meta` object. This can be
	 * used to access values that aren't defined as part of the SDK function.
	 */
	meta?: Record<string, unknown>;
};

export const healthCheck = <ThrowOnError extends boolean = false>(
	options?: Options<HealthCheckData, ThrowOnError>
) => {
	return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/healthcheck',
		...options
	});
};

export const searchLocations = <ThrowOnError extends boolean = false>(
	options?: Options<SearchLocationsData, ThrowOnError>
) => {
	return (options?.client ?? _heyApiClient).get<SearchLocationsResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/locations',
		...options
	});
};

export const createLocation = <ThrowOnError extends boolean = false>(
	options: Options<CreateLocationData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).post<CreateLocationResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/locations',
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options?.headers
		}
	});
};

export const deleteLocationByLocationId = <ThrowOnError extends boolean = false>(
	options: Options<DeleteLocationByLocationIdData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).delete<
		DeleteLocationByLocationIdResponse,
		unknown,
		ThrowOnError
	>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/locations/{location_id}',
		...options
	});
};

export const getLocationByLocationId = <ThrowOnError extends boolean = false>(
	options: Options<GetLocationByLocationIdData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).get<
		GetLocationByLocationIdResponse,
		unknown,
		ThrowOnError
	>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/locations/{location_id}',
		...options
	});
};

export const updateLocationByLocationId = <ThrowOnError extends boolean = false>(
	options: Options<UpdateLocationByLocationIdData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).patch<
		UpdateLocationByLocationIdResponse,
		unknown,
		ThrowOnError
	>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/locations/{location_id}',
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options?.headers
		}
	});
};

export const searchRoutes = <ThrowOnError extends boolean = false>(
	options?: Options<SearchRoutesData, ThrowOnError>
) => {
	return (options?.client ?? _heyApiClient).get<SearchRoutesResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/routes',
		...options
	});
};

export const createRoute = <ThrowOnError extends boolean = false>(
	options: Options<CreateRouteData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).post<CreateRouteResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/routes',
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options?.headers
		}
	});
};

export const deleteRoute = <ThrowOnError extends boolean = false>(
	options: Options<DeleteRouteData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).delete<DeleteRouteResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/routes/{route_id}',
		...options
	});
};

export const getRouteByRouteId = <ThrowOnError extends boolean = false>(
	options: Options<GetRouteByRouteIdData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).get<GetRouteByRouteIdResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/routes/{route_id}',
		...options
	});
};

export const searchSeshes = <ThrowOnError extends boolean = false>(
	options?: Options<SearchSeshesData, ThrowOnError>
) => {
	return (options?.client ?? _heyApiClient).get<SearchSeshesResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/seshes',
		...options
	});
};

export const createSesh = <ThrowOnError extends boolean = false>(
	options: Options<CreateSeshData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).post<CreateSeshResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/seshes',
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options?.headers
		}
	});
};

export const getActiveSesh = <ThrowOnError extends boolean = false>(
	options?: Options<GetActiveSeshData, ThrowOnError>
) => {
	return (options?.client ?? _heyApiClient).get<GetActiveSeshResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/seshes/active',
		...options
	});
};

export const deleteSesh = <ThrowOnError extends boolean = false>(
	options: Options<DeleteSeshData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).delete<DeleteSeshResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/seshes/{sesh_id}',
		...options
	});
};

export const getSeshBySeshId = <ThrowOnError extends boolean = false>(
	options: Options<GetSeshBySeshIdData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).get<GetSeshBySeshIdResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/seshes/{sesh_id}',
		...options
	});
};

export const updateSeshBySeshId = <ThrowOnError extends boolean = false>(
	options: Options<UpdateSeshBySeshIdData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).patch<UpdateSeshBySeshIdResponse, unknown, ThrowOnError>(
		{
			security: [
				{
					scheme: 'bearer',
					type: 'http'
				}
			],
			url: '/seshes/{sesh_id}',
			...options,
			headers: {
				'Content-Type': 'application/json',
				...options?.headers
			}
		}
	);
};

export const searchTicks = <ThrowOnError extends boolean = false>(
	options: Options<SearchTicksData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).get<SearchTicksResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/ticks',
		...options
	});
};

export const createTick = <ThrowOnError extends boolean = false>(
	options: Options<CreateTickData, ThrowOnError>
) => {
	return (options.client ?? _heyApiClient).post<CreateTickResponse, unknown, ThrowOnError>({
		security: [
			{
				scheme: 'bearer',
				type: 'http'
			}
		],
		url: '/ticks',
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options?.headers
		}
	});
};
