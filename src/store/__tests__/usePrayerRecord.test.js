import { renderHook, act } from '@testing-library/react-hooks'
import usePrayerRecord, { options, storeKey } from '../usePrayerRecord'

const mockSet = jest.fn()
const mockRemove = jest.fn()

jest.mock('react-cookie', () => ({
    useCookies: () => [{}, mockSet, mockRemove],
}))

afterEach(() => {
    mockSet.mockClear()
})

test('Initializes value to zero', () => {
    renderHook(() => usePrayerRecord())
    expect(mockSet).toHaveBeenCalledWith(storeKey, 0, options)
})

test('An incremented value is stored', () => {
    const { result } = renderHook(() => usePrayerRecord())
    const [, increment] = result.current
    act(() => increment())
    expect(mockSet).toHaveBeenCalledWith(storeKey, 1, options)
})
