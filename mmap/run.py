from app import app
import os
#set mmap/ to root_path
app.root_path = os.path.abspath(os.path.dirname(__file__));
if __name__ == '__main__' :
    app.run();
