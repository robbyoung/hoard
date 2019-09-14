import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
	NavigationParams,
} from 'react-navigation';

export type NavigationOptions = () => NavigationStackScreenOptions;
export type NavigationOptionsWithProps = (
	props: NavigationInjectedProps<NavigationParams>,
) => NavigationStackScreenOptions;

export type PromiseCallback<T> = (
	value?: boolean | PromiseLike<boolean> | undefined,
) => T;

export interface JestMock {
	setItem: () => Promise<void>;
}
