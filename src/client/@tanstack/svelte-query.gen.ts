// This file is auto-generated by @hey-api/openapi-ts

import {
	type Options,
	healthCheck,
	searchLocations,
	createLocation,
	deleteLocationByLocationId,
	getLocationByLocationId,
	updateLocationByLocationId,
	searchRoutes,
	createRoute,
	deleteRoute,
	getRouteByRouteId,
	searchSeshes,
	createSesh,
	getActiveSesh,
	deleteSesh,
	getSeshBySeshId,
	updateSeshBySeshId,
	searchTicks,
	createTick
} from '../sdk.gen';
import { queryOptions, type MutationOptions, type DefaultError } from '@tanstack/svelte-query';
import type {
	HealthCheckData,
	SearchLocationsData,
	CreateLocationData,
	CreateLocationResponse,
	DeleteLocationByLocationIdData,
	DeleteLocationByLocationIdResponse,
	GetLocationByLocationIdData,
	UpdateLocationByLocationIdData,
	UpdateLocationByLocationIdResponse,
	SearchRoutesData,
	CreateRouteData,
	CreateRouteResponse,
	DeleteRouteData,
	DeleteRouteResponse,
	GetRouteByRouteIdData,
	SearchSeshesData,
	CreateSeshData,
	CreateSeshResponse,
	GetActiveSeshData,
	DeleteSeshData,
	DeleteSeshResponse,
	GetSeshBySeshIdData,
	UpdateSeshBySeshIdData,
	UpdateSeshBySeshIdResponse,
	SearchTicksData,
	CreateTickData,
	CreateTickResponse
} from '../types.gen';
import { client as _heyApiClient } from '../client.gen';

export type QueryKey<TOptions extends Options> = [
	Pick<TOptions, 'baseUrl' | 'body' | 'headers' | 'path' | 'query'> & {
		_id: string;
		_infinite?: boolean;
	}
];

const createQueryKey = <TOptions extends Options>(
	id: string,
	options?: TOptions,
	infinite?: boolean
): [QueryKey<TOptions>[0]] => {
	const params: QueryKey<TOptions>[0] = {
		_id: id,
		baseUrl: (options?.client ?? _heyApiClient).getConfig().baseUrl
	} as QueryKey<TOptions>[0];
	if (infinite) {
		params._infinite = infinite;
	}
	if (options?.body) {
		params.body = options.body;
	}
	if (options?.headers) {
		params.headers = options.headers;
	}
	if (options?.path) {
		params.path = options.path;
	}
	if (options?.query) {
		params.query = options.query;
	}
	return [params];
};

export const healthCheckQueryKey = (options?: Options<HealthCheckData>) =>
	createQueryKey('healthCheck', options);

export const healthCheckOptions = (options?: Options<HealthCheckData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await healthCheck({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: healthCheckQueryKey(options)
	});
};

export const searchLocationsQueryKey = (options?: Options<SearchLocationsData>) =>
	createQueryKey('searchLocations', options);

export const searchLocationsOptions = (options?: Options<SearchLocationsData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await searchLocations({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: searchLocationsQueryKey(options)
	});
};

export const createLocationQueryKey = (options: Options<CreateLocationData>) =>
	createQueryKey('createLocation', options);

export const createLocationOptions = (options: Options<CreateLocationData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await createLocation({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: createLocationQueryKey(options)
	});
};

export const createLocationMutation = (options?: Partial<Options<CreateLocationData>>) => {
	const mutationOptions: MutationOptions<
		CreateLocationResponse,
		DefaultError,
		Options<CreateLocationData>
	> = {
		mutationFn: async (localOptions) => {
			const { data } = await createLocation({
				...options,
				...localOptions,
				throwOnError: true
			});
			return data;
		}
	};
	return mutationOptions;
};

export const deleteLocationByLocationIdMutation = (
	options?: Partial<Options<DeleteLocationByLocationIdData>>
) => {
	const mutationOptions: MutationOptions<
		DeleteLocationByLocationIdResponse,
		DefaultError,
		Options<DeleteLocationByLocationIdData>
	> = {
		mutationFn: async (localOptions) => {
			const { data } = await deleteLocationByLocationId({
				...options,
				...localOptions,
				throwOnError: true
			});
			return data;
		}
	};
	return mutationOptions;
};

export const getLocationByLocationIdQueryKey = (options: Options<GetLocationByLocationIdData>) =>
	createQueryKey('getLocationByLocationId', options);

export const getLocationByLocationIdOptions = (options: Options<GetLocationByLocationIdData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await getLocationByLocationId({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: getLocationByLocationIdQueryKey(options)
	});
};

export const updateLocationByLocationIdMutation = (
	options?: Partial<Options<UpdateLocationByLocationIdData>>
) => {
	const mutationOptions: MutationOptions<
		UpdateLocationByLocationIdResponse,
		DefaultError,
		Options<UpdateLocationByLocationIdData>
	> = {
		mutationFn: async (localOptions) => {
			const { data } = await updateLocationByLocationId({
				...options,
				...localOptions,
				throwOnError: true
			});
			return data;
		}
	};
	return mutationOptions;
};

export const searchRoutesQueryKey = (options?: Options<SearchRoutesData>) =>
	createQueryKey('searchRoutes', options);

export const searchRoutesOptions = (options?: Options<SearchRoutesData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await searchRoutes({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: searchRoutesQueryKey(options)
	});
};

export const createRouteQueryKey = (options: Options<CreateRouteData>) =>
	createQueryKey('createRoute', options);

export const createRouteOptions = (options: Options<CreateRouteData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await createRoute({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: createRouteQueryKey(options)
	});
};

export const createRouteMutation = (options?: Partial<Options<CreateRouteData>>) => {
	const mutationOptions: MutationOptions<
		CreateRouteResponse,
		DefaultError,
		Options<CreateRouteData>
	> = {
		mutationFn: async (localOptions) => {
			const { data } = await createRoute({
				...options,
				...localOptions,
				throwOnError: true
			});
			return data;
		}
	};
	return mutationOptions;
};

export const deleteRouteMutation = (options?: Partial<Options<DeleteRouteData>>) => {
	const mutationOptions: MutationOptions<
		DeleteRouteResponse,
		DefaultError,
		Options<DeleteRouteData>
	> = {
		mutationFn: async (localOptions) => {
			const { data } = await deleteRoute({
				...options,
				...localOptions,
				throwOnError: true
			});
			return data;
		}
	};
	return mutationOptions;
};

export const getRouteByRouteIdQueryKey = (options: Options<GetRouteByRouteIdData>) =>
	createQueryKey('getRouteByRouteId', options);

export const getRouteByRouteIdOptions = (options: Options<GetRouteByRouteIdData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await getRouteByRouteId({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: getRouteByRouteIdQueryKey(options)
	});
};

export const searchSeshesQueryKey = (options?: Options<SearchSeshesData>) =>
	createQueryKey('searchSeshes', options);

export const searchSeshesOptions = (options?: Options<SearchSeshesData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await searchSeshes({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: searchSeshesQueryKey(options)
	});
};

export const createSeshQueryKey = (options: Options<CreateSeshData>) =>
	createQueryKey('createSesh', options);

export const createSeshOptions = (options: Options<CreateSeshData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await createSesh({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: createSeshQueryKey(options)
	});
};

export const createSeshMutation = (options?: Partial<Options<CreateSeshData>>) => {
	const mutationOptions: MutationOptions<
		CreateSeshResponse,
		DefaultError,
		Options<CreateSeshData>
	> = {
		mutationFn: async (localOptions) => {
			const { data } = await createSesh({
				...options,
				...localOptions,
				throwOnError: true
			});
			return data;
		}
	};
	return mutationOptions;
};

export const getActiveSeshQueryKey = (options?: Options<GetActiveSeshData>) =>
	createQueryKey('getActiveSesh', options);

export const getActiveSeshOptions = (options?: Options<GetActiveSeshData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await getActiveSesh({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: getActiveSeshQueryKey(options)
	});
};

export const deleteSeshMutation = (options?: Partial<Options<DeleteSeshData>>) => {
	const mutationOptions: MutationOptions<
		DeleteSeshResponse,
		DefaultError,
		Options<DeleteSeshData>
	> = {
		mutationFn: async (localOptions) => {
			const { data } = await deleteSesh({
				...options,
				...localOptions,
				throwOnError: true
			});
			return data;
		}
	};
	return mutationOptions;
};

export const getSeshBySeshIdQueryKey = (options: Options<GetSeshBySeshIdData>) =>
	createQueryKey('getSeshBySeshId', options);

export const getSeshBySeshIdOptions = (options: Options<GetSeshBySeshIdData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await getSeshBySeshId({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: getSeshBySeshIdQueryKey(options)
	});
};

export const updateSeshBySeshIdMutation = (options?: Partial<Options<UpdateSeshBySeshIdData>>) => {
	const mutationOptions: MutationOptions<
		UpdateSeshBySeshIdResponse,
		DefaultError,
		Options<UpdateSeshBySeshIdData>
	> = {
		mutationFn: async (localOptions) => {
			const { data } = await updateSeshBySeshId({
				...options,
				...localOptions,
				throwOnError: true
			});
			return data;
		}
	};
	return mutationOptions;
};

export const searchTicksQueryKey = (options: Options<SearchTicksData>) =>
	createQueryKey('searchTicks', options);

export const searchTicksOptions = (options: Options<SearchTicksData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await searchTicks({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: searchTicksQueryKey(options)
	});
};

export const createTickQueryKey = (options: Options<CreateTickData>) =>
	createQueryKey('createTick', options);

export const createTickOptions = (options: Options<CreateTickData>) => {
	return queryOptions({
		queryFn: async ({ queryKey, signal }) => {
			const { data } = await createTick({
				...options,
				...queryKey[0],
				signal,
				throwOnError: true
			});
			return data;
		},
		queryKey: createTickQueryKey(options)
	});
};

export const createTickMutation = (options?: Partial<Options<CreateTickData>>) => {
	const mutationOptions: MutationOptions<
		CreateTickResponse,
		DefaultError,
		Options<CreateTickData>
	> = {
		mutationFn: async (localOptions) => {
			const { data } = await createTick({
				...options,
				...localOptions,
				throwOnError: true
			});
			return data;
		}
	};
	return mutationOptions;
};
