import { appReducer } from '../appReducer';
import { actions } from '../../../utils';

const mockState = {
    shouldSaveOffline: false,
    isProcessing: false,
};

test('App states changes correctly', () => {
    expect(
        appReducer(mockState, {
            type: actions.TOGGLE_PROCESSING_STATE,
        }),
    ).toEqual({
        isProcessing: true,
        shouldSaveOffline: false,
    });

    expect(
        appReducer(mockState, {
            type: actions.TOGGLE_OFFLINE_SAVE,
        }),
    ).toEqual({
        isProcessing: false,
        shouldSaveOffline: true,
    });
});
