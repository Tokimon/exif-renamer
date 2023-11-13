import { dialog } from 'electron';
import { mocked } from 'ts-jest/utils';
import chooseDirectory from './chooseDirectory';

jest.mock('electron');

const { showOpenDialog } = mocked(dialog);

interface SetShowOpenDialogReturnValueProps {
  canceled?: boolean;
  filePaths?: string[];
}

const setShowOpenDialogReturnValue = ({ canceled = false, filePaths = [] }: SetShowOpenDialogReturnValueProps) =>
  showOpenDialog.mockReturnValue(Promise.resolve({ canceled, filePaths }));

describe('server/requests/handlers/chooseDirectory', () => {
  beforeEach(() => {
    showOpenDialog.mockReset();
  });

  test('When dialog is canceled it returns null', async () => {
    setShowOpenDialogReturnValue({ canceled: true });

    const result = await chooseDirectory();

    expect(result).toBeNull();
  });

  test('When directory has been chosen it returns the first found directory path', async () => {
    const filePaths = ['my/first file/path/', 'my/second file/path/'];
    setShowOpenDialogReturnValue({ filePaths });

    const result = await chooseDirectory();

    expect(result).toBe(filePaths[0]);
  });
});
