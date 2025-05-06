import pyautogui
import time
import random

# Set a delay between moves (in seconds)
delay = 5

# Set screen size (auto-detect)
screenWidth, screenHeight = pyautogui.size()

try:
    while True:
        # Pick a random point on screen
        x = random.randint(0, screenWidth - 1)
        y = random.randint(0, screenHeight - 1)
        
        # Move the mouse smoothly over 0.5 seconds
        pyautogui.moveTo(x, y, duration=0.5)
        
        # Click at the current location
        # pyautogui.click()
        
        # Optional: print position
        print(f"Moved and clicked at: {x}, {y}")
        
        # Wait before moving again
        time.sleep(delay)

except KeyboardInterrupt:
    print("\nMouse movement stopped by user.")
