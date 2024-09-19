import time

start_time = time.time()

a = 3 + (10/2)
b = 8 * 27
print(a + b)

end_time = time.time()
execution_time = end_time - start_time

print(f"Real total time: {execution_time:.6f} seconds")
print("Big-O time complexity: O(1)")

# Bubble sort implementation
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Test cases
print("\nBubble Sort:")

# case 1
data = [3, 4, 5, 0, -2]
print("Case 1 input:", data)
print("Case 1 sorted:", bubble_sort(data.copy()))

# case 2
data = [-2, 0, 5, 4, 3]
print("Case 2 input:", data)
print("Case 2 sorted:", bubble_sort(data.copy()))

# case 3
data = [-2, 0, 3, 4, 5]
print("Case 3 input:", data)
print("Case 3 sorted:", bubble_sort(data.copy()))