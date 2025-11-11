# ==============================
# File: auto_launch.py
# Description: Auto-opens the SportsConnect website in browser
# ==============================

import webbrowser
import os

# Get absolute path to index.html
path = os.path.abspath("index.html")

# Open in default browser
webbrowser.open(f"file://{path}")
print("Launching SportsConnect website...")
