import { Wallet, WalletName } from '@solana/wallet-adapter-base';
import { TokenPocketWalletAdapter, TokenPocketWalletAdapterConfig } from './adapter';

export const TokenPocketWalletName = 'TokenPocket' as WalletName;

export const getTokenPocketWallet = (config: TokenPocketWalletAdapterConfig = {}): Wallet => ({
    name: TokenPocketWalletName,
    url: 'https://tokenpocket.pro',
    icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDI0IDEwMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMjk4MEZFO30KCS5zdDF7b3BhY2l0eTowLjY7ZmlsbDojRkZGRkZGO30KCS5zdDJ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHJlY3QgeD0iMC41IiB5PSItMC41IiBjbGFzcz0ic3QwIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0Ii8+CjxnPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ2NC4xLDM4OS43aC0xOS4xVjI1My4zaC0yNTJjLTQuOCwwLTguNywzLjktOC43LDguN3YxOTIuM2wwLDBsMCwwYzAsNC44LDMuOSw4LjcsOC43LDguN2g5Ni4ydjM0OS43bDAsMAoJCWwwLDBjMCw0LjgsMy45LDguNyw4LjcsOC43aDBsMCwwaDE1Ny40YzQuOCwwLDguNy0zLjksOC43LTguN2wwLDBsMCwwVjM4OS43eiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTYzMC44LDIwMS41aC02MC41bDAsMEg0MDQuMmwwLDBjLTQuOCwwLTguNywzLjktOC43LDguN1Y3NjFsMCwwbDAsMGMwLDQuOCwzLjksOC43LDguNyw4LjdsMCwwaDE1Ny40CgkJYzAsMCwwLDAsMCwwYzQuOCwwLDguNy0zLjksOC43LTguN1Y2MjEuMWg2MC41YzExNS45LDAsMjA5LjgtOTMuOSwyMDkuOC0yMDkuOEM4NDAuNiwyOTUuNCw3NDYuNywyMDEuNSw2MzAuOCwyMDEuNXoiLz4KPC9nPgo8L3N2Zz4K',
    adapter: new TokenPocketWalletAdapter(config),
});