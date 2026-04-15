    import { useTanStackQueryDevTools } from "@rozenite/tanstack-query-plugin";
    import { useNetworkActivityDevTools } from "@rozenite/network-activity-plugin";
    import {
      createAsyncStorageAdapter,
      useRozeniteStoragePlugin,
    } from "@rozenite/storage-plugin";
    import AsyncStorage from "@react-native-async-storage/async-storage";
    import { queryClient } from "@/lib/queryClient";

    const storages = [
      createAsyncStorageAdapter({
        storage: AsyncStorage,
      }),
    ];

    export function useRozeniteDevTools() {
      useTanStackQueryDevTools(queryClient);
      useNetworkActivityDevTools();
      useRozeniteStoragePlugin({ storages });
    }