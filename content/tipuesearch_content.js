var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': '第一周', 'text': '使用 \xa0Solidworks, Inventor,或Onshape 建立下列至少2種零件圖, 並以表格列出各零件的體積進行對比。 \n http://mde.tw/cad2020/downloads/Solidworks%20%E9%9B%B6%E4%BB%B6%E7%B9%AA%E5%9C%96%E7%B7%B4%E7%BF%921.pdf \n', 'tags': '', 'url': '第一周.html'}, {'title': '個人', 'text': '建立倉儲，畫inventor \n inventor圖檔: https://drive.google.com/drive/folders/125G0YGsW1NerJ0a1w0sqX2C2h1VYs8m3?usp=sharing \n 圖片: \n \n https://drive.google.com/file/d/13nT2WNyrUXYb0pLFn5Ry40GHwtO2CnZw/view? usp=sharing \n SOLDWORKS圖檔: https://drive.google.com/drive/folders/1jGP1GJG8gggGLyYI9LuJDmr3HbtYS8xm?usp=sharing \n', 'tags': '', 'url': '個人.html'}, {'title': '團隊', 'text': '\n \n', 'tags': '', 'url': '團隊.html'}, {'title': '第二周', 'text': '', 'tags': '', 'url': '第二周.html'}, {'title': 'SOLDWORKS教學影片', 'text': '影片如下 \n 31題: https://youtu.be/oHPK-49Vmrc \n 32題: https://youtu.be/NmyJbiPcKrw \n 33題: https://youtu.be/gXx-8DHAhEQ \n 34題: https://youtu.be/zKOdbzRA3rE \n 35題: https://youtu.be/L0Y0iu9PeXU \n 36題: https://youtu.be/fy1fPoPPRa8 \n 37題: https://youtu.be/Wv-PfyUdYQ4 \n 38題: https://youtu.be/_x8BJ9nyTNQ \n 39題 :https://youtu.be/MWuHL51k7PI \n 40題: https://youtu.be/mn-6Y5liiaM \n 圖檔: https://drive.google.com/drive/folders/1jGP1GJG8gggGLyYI9LuJDmr3HbtYS8xm?usp=sharing \n', 'tags': '', 'url': 'SOLDWORKS教學影片.html'}, {'title': 'Inventor教學影片', 'text': '31: https://youtu.be/QUrguF8WzAw \n 32: https://youtu.be/hYUO-SLHY0I \n 33: https://youtu.be/6WNAYdz02BE \n 34: https://youtu.be/ha4wgY2d3uA \n 35: https://youtu.be/0Zw0MztSfOA \n 36: https://youtu.be/Yns4dGfFMmw \n 37: https://youtu.be/GLd4EXDT3eI \n 38: https://youtu.be/hIgcKqSJkv8 \n 39: https://youtu.be/hehtA8H0pWQ \n 40: https://youtu.be/D1PaNk9wv7c \n 圖檔: https://drive.google.com/drive/folders/125G0YGsW1NerJ0a1w0sqX2C2h1VYs8m3?usp=sharing \n', 'tags': '', 'url': 'Inventor教學影片.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};