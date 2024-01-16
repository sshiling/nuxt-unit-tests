import { shallowMount } from '@vue/test-utils';
import IndexPage from '@/pages/index.vue';
import { mockNuxtImport } from '@nuxt/test-utils/runtime';

const mockRouterPush = vi.fn();

// TODO: Fix "No tests were found" issue
// mockNuxtImport('useRouter', () => {
//     return () => {
//         return {
//             router: {
//                 push: mockRouterPush,
//             }
//         };
//     };
// });

const testIds = {
    aboutButton: '[data-testid="about-button"]',
}

const createWrapper = (options = {}) => shallowMount(IndexPage, {
    ...options,
});

describe('IndexPage', () => {
    test('Go to About page', async () => {
        const wrapper = createWrapper();
        const aboutButton = wrapper.find(testIds.aboutButton);
        await aboutButton.trigger('click');
        // TODO: fix this expect scenario
        // expect(mockRouterPush).toHaveBeenCalledWith('/about');
    })
});
