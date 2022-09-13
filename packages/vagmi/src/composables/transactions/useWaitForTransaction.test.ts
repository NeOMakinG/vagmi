import { actConnect, renderComposable } from '../../../test';
import { useConnect } from '../accounts';
import type {
  UseWaitForTransactionArgs,
  UseWaitForTransactionConfig,
} from './useWaitForTransaction';
import {
  useWaitForTransaction,
} from './useWaitForTransaction';

function useWaitForTransactionWithConnect(
  config: UseWaitForTransactionArgs & UseWaitForTransactionConfig = {},
) {
  return {
    connect: useConnect(),
    waitForTransaction: useWaitForTransaction(config),
  };
}

describe('useWaitForTransaction', () => {
  it('mounts', () => {
    const { result } = renderComposable(() => useWaitForTransaction());
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { internal, ...res } = result;
    expect(res).toMatchInlineSnapshot(`
      {
        "data": ObjectRefImpl {
          "__v_isRef": true,
          "_defaultValue": undefined,
          "_key": "data",
          "_object": {
            "data": undefined,
            "dataUpdatedAt": 0,
            "error": null,
            "errorUpdateCount": 0,
            "errorUpdatedAt": 0,
            "failureCount": 0,
            "fetchStatus": "idle",
            "isError": false,
            "isFetched": false,
            "isFetchedAfterMount": false,
            "isFetching": false,
            "isLoading": true,
            "isLoadingError": false,
            "isPaused": false,
            "isPlaceholderData": false,
            "isPreviousData": false,
            "isRefetchError": false,
            "isRefetching": false,
            "isStale": true,
            "isSuccess": false,
            "refetch": [Function],
            "remove": [Function],
            "status": "loading",
          },
        },
        "error": ObjectRefImpl {
          "__v_isRef": true,
          "_defaultValue": undefined,
          "_key": "error",
          "_object": {
            "data": undefined,
            "dataUpdatedAt": 0,
            "error": null,
            "errorUpdateCount": 0,
            "errorUpdatedAt": 0,
            "failureCount": 0,
            "fetchStatus": "idle",
            "isError": false,
            "isFetched": false,
            "isFetchedAfterMount": false,
            "isFetching": false,
            "isLoading": true,
            "isLoadingError": false,
            "isPaused": false,
            "isPlaceholderData": false,
            "isPreviousData": false,
            "isRefetchError": false,
            "isRefetching": false,
            "isStale": true,
            "isSuccess": false,
            "refetch": [Function],
            "remove": [Function],
            "status": "loading",
          },
        },
        "errorUpdateCount": ObjectRefImpl {
          "__v_isRef": true,
          "_defaultValue": undefined,
          "_key": "errorUpdateCount",
          "_object": {
            "data": undefined,
            "dataUpdatedAt": 0,
            "error": null,
            "errorUpdateCount": 0,
            "errorUpdatedAt": 0,
            "failureCount": 0,
            "fetchStatus": "idle",
            "isError": false,
            "isFetched": false,
            "isFetchedAfterMount": false,
            "isFetching": false,
            "isLoading": true,
            "isLoadingError": false,
            "isPaused": false,
            "isPlaceholderData": false,
            "isPreviousData": false,
            "isRefetchError": false,
            "isRefetching": false,
            "isStale": true,
            "isSuccess": false,
            "refetch": [Function],
            "remove": [Function],
            "status": "loading",
          },
        },
        "fetchStatus": ObjectRefImpl {
          "__v_isRef": true,
          "_defaultValue": undefined,
          "_key": "fetchStatus",
          "_object": {
            "data": undefined,
            "dataUpdatedAt": 0,
            "error": null,
            "errorUpdateCount": 0,
            "errorUpdatedAt": 0,
            "failureCount": 0,
            "fetchStatus": "idle",
            "isError": false,
            "isFetched": false,
            "isFetchedAfterMount": false,
            "isFetching": false,
            "isLoading": true,
            "isLoadingError": false,
            "isPaused": false,
            "isPlaceholderData": false,
            "isPreviousData": false,
            "isRefetchError": false,
            "isRefetching": false,
            "isStale": true,
            "isSuccess": false,
            "refetch": [Function],
            "remove": [Function],
            "status": "loading",
          },
        },
        "isError": ObjectRefImpl {
          "__v_isRef": true,
          "_defaultValue": undefined,
          "_key": "isError",
          "_object": {
            "data": undefined,
            "dataUpdatedAt": 0,
            "error": null,
            "errorUpdateCount": 0,
            "errorUpdatedAt": 0,
            "failureCount": 0,
            "fetchStatus": "idle",
            "isError": false,
            "isFetched": false,
            "isFetchedAfterMount": false,
            "isFetching": false,
            "isLoading": true,
            "isLoadingError": false,
            "isPaused": false,
            "isPlaceholderData": false,
            "isPreviousData": false,
            "isRefetchError": false,
            "isRefetching": false,
            "isStale": true,
            "isSuccess": false,
            "refetch": [Function],
            "remove": [Function],
            "status": "loading",
          },
        },
        "isFetched": ObjectRefImpl {
          "__v_isRef": true,
          "_defaultValue": undefined,
          "_key": "isFetched",
          "_object": {
            "data": undefined,
            "dataUpdatedAt": 0,
            "error": null,
            "errorUpdateCount": 0,
            "errorUpdatedAt": 0,
            "failureCount": 0,
            "fetchStatus": "idle",
            "isError": false,
            "isFetched": false,
            "isFetchedAfterMount": false,
            "isFetching": false,
            "isLoading": true,
            "isLoadingError": false,
            "isPaused": false,
            "isPlaceholderData": false,
            "isPreviousData": false,
            "isRefetchError": false,
            "isRefetching": false,
            "isStale": true,
            "isSuccess": false,
            "refetch": [Function],
            "remove": [Function],
            "status": "loading",
          },
        },
        "isFetching": ObjectRefImpl {
          "__v_isRef": true,
          "_defaultValue": undefined,
          "_key": "isFetching",
          "_object": {
            "data": undefined,
            "dataUpdatedAt": 0,
            "error": null,
            "errorUpdateCount": 0,
            "errorUpdatedAt": 0,
            "failureCount": 0,
            "fetchStatus": "idle",
            "isError": false,
            "isFetched": false,
            "isFetchedAfterMount": false,
            "isFetching": false,
            "isLoading": true,
            "isLoadingError": false,
            "isPaused": false,
            "isPlaceholderData": false,
            "isPreviousData": false,
            "isRefetchError": false,
            "isRefetching": false,
            "isStale": true,
            "isSuccess": false,
            "refetch": [Function],
            "remove": [Function],
            "status": "loading",
          },
        },
        "isLoading": ObjectRefImpl {
          "__v_isRef": true,
          "_defaultValue": undefined,
          "_key": "isLoading",
          "_object": {
            "data": undefined,
            "dataUpdatedAt": 0,
            "error": null,
            "errorUpdateCount": 0,
            "errorUpdatedAt": 0,
            "failureCount": 0,
            "fetchStatus": "idle",
            "isError": false,
            "isFetched": false,
            "isFetchedAfterMount": false,
            "isFetching": false,
            "isLoading": true,
            "isLoadingError": false,
            "isPaused": false,
            "isPlaceholderData": false,
            "isPreviousData": false,
            "isRefetchError": false,
            "isRefetching": false,
            "isStale": true,
            "isSuccess": false,
            "refetch": [Function],
            "remove": [Function],
            "status": "loading",
          },
        },
        "isRefetching": ObjectRefImpl {
          "__v_isRef": true,
          "_defaultValue": undefined,
          "_key": "isRefetching",
          "_object": {
            "data": undefined,
            "dataUpdatedAt": 0,
            "error": null,
            "errorUpdateCount": 0,
            "errorUpdatedAt": 0,
            "failureCount": 0,
            "fetchStatus": "idle",
            "isError": false,
            "isFetched": false,
            "isFetchedAfterMount": false,
            "isFetching": false,
            "isLoading": true,
            "isLoadingError": false,
            "isPaused": false,
            "isPlaceholderData": false,
            "isPreviousData": false,
            "isRefetchError": false,
            "isRefetching": false,
            "isStale": true,
            "isSuccess": false,
            "refetch": [Function],
            "remove": [Function],
            "status": "loading",
          },
        },
        "isSuccess": ObjectRefImpl {
          "__v_isRef": true,
          "_defaultValue": undefined,
          "_key": "isSuccess",
          "_object": {
            "data": undefined,
            "dataUpdatedAt": 0,
            "error": null,
            "errorUpdateCount": 0,
            "errorUpdatedAt": 0,
            "failureCount": 0,
            "fetchStatus": "idle",
            "isError": false,
            "isFetched": false,
            "isFetchedAfterMount": false,
            "isFetching": false,
            "isLoading": true,
            "isLoadingError": false,
            "isPaused": false,
            "isPlaceholderData": false,
            "isPreviousData": false,
            "isRefetchError": false,
            "isRefetching": false,
            "isStale": true,
            "isSuccess": false,
            "refetch": [Function],
            "remove": [Function],
            "status": "loading",
          },
        },
        "refetch": [Function],
        "status": ObjectRefImpl {
          "__v_isRef": true,
          "_defaultValue": undefined,
          "_key": "status",
          "_object": {
            "data": undefined,
            "dataUpdatedAt": 0,
            "error": null,
            "errorUpdateCount": 0,
            "errorUpdatedAt": 0,
            "failureCount": 0,
            "fetchStatus": "idle",
            "isError": false,
            "isFetched": false,
            "isFetchedAfterMount": false,
            "isFetching": false,
            "isLoading": true,
            "isLoadingError": false,
            "isPaused": false,
            "isPlaceholderData": false,
            "isPreviousData": false,
            "isRefetchError": false,
            "isRefetching": false,
            "isStale": true,
            "isSuccess": false,
            "refetch": [Function],
            "remove": [Function],
            "status": "loading",
          },
        },
        "suspense": [Function],
      }
    `);
  });

  describe('configuration', () => {
    it('chainId,', async () => {
      const hash = '0x6825f7848a2d92e2788cb660ef57d22add152c8c70817c6a62ed58d97bead7c9';
      const utils = renderComposable(() =>
        useWaitForTransactionWithConnect({
          chainId: 1,
          hash,
        }),
      );
      const { nextTick, result, waitFor } = utils;
      await actConnect({ utils });

      nextTick();

      await waitFor(() =>
        expect(result.waitForTransaction.isSuccess).toBeTruthy(),
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data, internal, ...res } = result.waitForTransaction;
      expect(data).toBeDefined();
      expect(data.value?.transactionHash).toEqual(hash);
      expect(res).toMatchInlineSnapshot(`
        {
          "error": null,
          "fetchStatus": "idle",
          "isError": false,
          "isFetched": true,
          "isFetching": false,
          "isIdle": false,
          "isLoading": false,
          "isRefetching": false,
          "isSuccess": true,
          "refetch": [Function],
          "status": "success",
        }
      `);
    });

    it('hash', async () => {
      const hash = '0x6825f7848a2d92e2788cb660ef57d22add152c8c70817c6a62ed58d97bead7c9';
      const utils = renderComposable(() =>
        useWaitForTransactionWithConnect({
          hash,
        }),
      );

      const { nextTick, result, waitFor } = utils;

      await actConnect({ utils });

      nextTick();

      await waitFor(() =>
        expect(result.waitForTransaction.isSuccess).toBeTruthy(),
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data, internal, ...res } = result.waitForTransaction;
      expect(data).toBeDefined();
      expect(data.value?.transactionHash).toEqual(hash);
      expect(res).toMatchInlineSnapshot(`
        {
          "error": null,
          "fetchStatus": "idle",
          "isError": false,
          "isFetched": true,
          "isFetching": false,
          "isIdle": false,
          "isLoading": false,
          "isRefetching": false,
          "isSuccess": true,
          "refetch": [Function],
          "status": "success",
        }
      `);
    });
  });
});
