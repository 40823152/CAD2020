var tipuesearch = {"pages": [{'title': '主頁', 'text': 'cad2020 github 網址:\xa0 https://github.com/40823152/cad2020 \n cp2020 github 網址: https://github.com/40823152/cp2020 \n cp2020 網頁: https://40823152.github.io/cp2020/content/index.html \n \n 新增w13:coppeliaSim 快捷鍵 ，摩天輪問題修改。 \n', 'tags': '', 'url': '主頁.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'w1-w6', 'text': '使用 \xa0Solidworks, Inventor,或Onshape 建立下列至少2種零件圖, 並以表格列出各零件的體積進行對比。 \n http://mde.tw/cad2020/downloads/Solidworks%20%E9%9B%B6%E4%BB%B6%E7%B9%AA%E5%9C%96%E7%B7%B4%E7%BF%921.pdf', 'tags': '', 'url': 'w1-w6.html'}, {'title': '個人', 'text': '建立倉儲，畫inventor \n 2019教育版nventor圖檔: https://drive.google.com/drive/folders/125G0YGsW1NerJ0a1w0sqX2C2h1VYs8m3?usp=sharing \n 圖片: \n \n https://drive.google.com/file/d/13nT2WNyrUXYb0pLFn5Ry40GHwtO2CnZw/view? usp=sharing \n SOLDWORKS圖檔: \n 通用版本: https://drive.google.com/drive/folders/1OU0ulrT4pScAAN2W6oPKWFnsDpCoFkT5?usp=sharing \n 2018版本: https://drive.google.com/drive/folders/1jGP1GJG8gggGLyYI9LuJDmr3HbtYS8xm?usp=sharing', 'tags': '', 'url': '個人.html'}, {'title': '團隊', 'text': '\n', 'tags': '', 'url': '團隊.html'}, {'title': '教學影片', 'text': '', 'tags': '', 'url': '教學影片.html'}, {'title': 'SOLDWORKS教學影片', 'text': '影片如下 \n 31題: https://youtu.be/oHPK-49Vmrc \n 32題: https://youtu.be/NmyJbiPcKrw \n 33題: https://youtu.be/gXx-8DHAhEQ \n 34題: https://youtu.be/zKOdbzRA3rE \n 35題: https://youtu.be/L0Y0iu9PeXU \n 36題: https://youtu.be/fy1fPoPPRa8 \n 37題: https://youtu.be/Wv-PfyUdYQ4 \n 38題: https://youtu.be/_x8BJ9nyTNQ \n 39題 :https://youtu.be/MWuHL51k7PI \n 40題: https://youtu.be/mn-6Y5liiaM \n 通用版圖檔: \n https://drive.google.com/drive/u/1/folders/1OU0ulrT4pScAAN2W6oPKWFnsDpCoFkT5 \n \n 2018圖檔: https://drive.google.com/drive/folders/1jGP1GJG8gggGLyYI9LuJDmr3HbtYS8xm?usp=sharing', 'tags': '', 'url': 'SOLDWORKS教學影片.html'}, {'title': 'Inventor教學影片', 'text': '31: https://youtu.be/QUrguF8WzAw \n 32: https://youtu.be/hYUO-SLHY0I \n 33: https://youtu.be/6WNAYdz02BE \n 34: https://youtu.be/ha4wgY2d3uA \n 35: https://youtu.be/0Zw0MztSfOA \n 36: https://youtu.be/Yns4dGfFMmw \n 37: https://youtu.be/GLd4EXDT3eI \n 38: https://youtu.be/hIgcKqSJkv8 \n 39: https://youtu.be/hehtA8H0pWQ \n 40: https://youtu.be/D1PaNk9wv7c \n 教育版圖檔: https://drive.google.com/drive/folders/125G0YGsW1NerJ0a1w0sqX2C2h1VYs8m3?usp=sharing \n', 'tags': '', 'url': 'Inventor教學影片.html'}, {'title': 'W7', 'text': '原本是c語言，可以改用 y:\\tcc\\tcc.exe -run 進行類解譯,\xa0但是必須把檔名以.c為結尾 \n #include <stdio.h>\n  \nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n} \n \n /* Runge Kutta for a set of first order differential equations */\n  \n#include <stdio.h>\n#include <math.h>\n  \n#define N 2 /* number of first order equations */\n#define dist 0.1 /* stepsize in t*/\n#define MAX 30.0 /* max for t */\n  \nFILE *output; /* internal filename */\nFILE *output1; /* internal filename */\n// 利用 pipe 呼叫 gnuplot 繪圖\nFILE *pipe;\n  \nvoid runge4(double x, double y[], double step); /* Runge-Kutta function */\ndouble f(double x, double y[], int i); /* function for derivatives */\n  \nvoid main(){\n  \n  double t, y[N];\n  int j;\n  \n  output=fopen("osc.dat", "w"); /* external filename */\n  output1=fopen("osc1.dat", "w"); /* external filename */\n  \n  y[0]=2.0; /* initial position */\n  y[1]=1.0; /* initial velocity */\n  \n  //fprintf(output, "0\\t%f\\n", y[0]);\n  \n  for (j=1; j*dist<=MAX ;j++) /* time loop */{\n  \n    t=j*dist;\n    runge4(t, y, dist);\n    fprintf(output, "%f\\t%f\\n", t, y[0]);\n    fprintf(output1, "%f\\t%f\\n", t, y[1]);\n  }\n  \n  fclose(output);\n  fclose(output1);\n  \n  pipe = popen("gnuplot -persist","w");\n  //fprintf(pipe,"set term png enhanced font \\"v:/fireflysung.ttf\\" 18 \\n");\n  fprintf(pipe,"set term png enhanced font \\"y:/wqy-microhei.ttc\\" 18 \\n");\n  //fprintf(pipe,"set yrange [68:70]\\n");\n  fprintf(pipe,"set output \\"test.png\\"\\n");\n  fprintf(pipe, "plot \\"osc.dat\\" title \\"位移\\" with lines, \\"osc1.dat\\" title \\"速度\\" with lines\\n");\n  fprintf(pipe,"quit\\n");\n \n  fprintf(pipe,"quit\\n");\n  pclose(pipe);\n}\n  \nvoid runge4(double x, double y[], double step){\n  \n  double h=step/2.0, /* the midpoint */\n  t1[N], t2[N], t3[N], /* temporary storage arrays */\n  k1[N], k2[N], k3[N],k4[N]; /* for Runge-Kutta */\n  int i;\n  \n  for (i=0;i<N;i++){\n  \n    t1[i]=y[i]+0.5*(k1[i]=step*f(x,y,i));\n  }\n  \n  for (i=0;i<N;i++){\n  \n    t2[i]=y[i]+0.5*(k2[i]=step*f(x+h, t1, i));\n  }\n  \n  for (i=0;i<N;i++){\n  \n    t3[i]=y[i]+ (k3[i]=step*f(x+h, t2, i));\n  }\n  \n  for (i=0;i<N;i++){\n  \n    k4[i]= step*f(x+step, t3, i);\n  }\n  \n  for (i=0;i<N;i++){\n  \n    y[i]+=(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6.0;\n  }\n}\n  \ndouble f(double x, double y[], int i){\n  \n  if (i==0)\n    x=y[1]; /* derivative of first equation */\n  if (i==1)\n    x=-y[0]-0.5*y[1];\n  return x;\n} \n 上述所解的狀態方程式: \n 質量為 1kg 物理, 以 k=1 彈簧與 b=0.5 阻尼器連接在固定牆壁, 起始拉開 1m, 速度為０ 時放開, 求放開質量後的運動模擬. \n x ( t ) \xa0 表示質量拉開水平方向設為正向 x, 且為時間 t 的函式 \n 起始條件: x ( 0 ) =2 .0 ， x ˙ ( 0 ) =1 \n 以下利用程式定義解題: \n x = y [ 0 ] \n x ˙ = y [ 1 ] \n x ¨ = − y [ 0 ] − 0.5 ∗ y [ 1 ] \n 並產生數值運算結果: \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'w10', 'text': '第一次會議紀錄 \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'W12', 'text': 'CoppeliaSim \n 創建圓球:add--> Proximity sensor -->sphere ，x可調大小 \n :可以調整物體方向，(x,y,z)調整3維座標 \n \n \n 創建方塊:add--> Proximity sensor --> cuboid ，(x,y,z)可調大小 \n \n \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': 'Compile Solvespace 快捷鍵 \n \n CTRL+O： 打開一個場景 \n CTRL+N：打開一個新場景 \n CTRL+S：保存場景 \n CTRL+W： 關閉場景 \n CTRL+Q： 退出應用程式 \n CTRL+<space>： 開始/停止模擬 \n CTRL+E：按E一下/二下/三下，分別為調整場景/調整物體方向/調整物體角度 \n CTRL+D： 打開對象屬性對話框 \n CTRL+G： 打開計算模塊對話框 \n \n \n 團隊作品-摩天輪: \n 版本2檔案: \n https://drive.google.com/file/d/1VsZoy0F99G0tWm4viq1ehZRVbOwIhZCt/view?usp=sharing \n \n 目前問題: \n 摩天輪座艙會旋轉 \n \n 修改問題: \n 1.對軸按CTRL+D( 打開對象屬性對話框) \n 2.在屬性框裡把軸改成可承受1N-mm，即可使座艙不會旋轉 \n \n \n \n 延伸問題: \n 改成版本2後，座艙無法水平轉動，我的想法是座艙設計不良，因為重心不穩，導致座艙只能傾斜轉動。 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '團隊作品-摩天輪: \n 版本3檔案: https://drive.google.com/file/d/1Dqgco8pbMwRwy1iMPS7pa1CFjREwNphc/view?usp=sharing \n \n 問題修改 \n 修改座艙重心問題，使球掉落能讓座艙平衡 \n \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'w15', 'text': '', 'tags': '', 'url': 'w15.html'}, {'title': '指令', 'text': 'git version /檢查git \n path /目前命令列的指令 \n git clone /複製遠端的內容下載 \n git submodule add https://github.com/mdecourse/cmsimde.git cmsimde /建立cmsimde目錄以子模組存在加進來從網址下載 \n git config --global http.proxy http://[2001:288:6004:17::69]:3128 /設定proxy \n git config --global user.name "40823152" /設定身份名子 \n git config --global user.email "40823152@mde.nfu.edu.tw" /設定身份信箱 \n python wsgi.py /用python執行動態網頁 \n git add . /增加所做的事納入進去 \n git commit -m "名稱" /設定標籤名子 \n git push /推送資料 \n git pull /把近端資料更遠端資料同步 \n git clone --recurse-submodules 網址 /倉儲有cmsimde子模組必須使用這個指令才能下載 \n git remote add gitlab\xa0 \n git push gitlab 網址 \n', 'tags': '', 'url': '指令.html'}, {'title': 'bug', 'text': '', 'tags': '', 'url': 'bug.html'}, {'title': 'cmsimde錯誤', 'text': 'github 送上去的資料沒有綠勾，cmsimde開不起來，要刪除cmsimde重新安裝。 \n \n Delete the relevant section from the \xa0 .gitmodules \xa0 file. \n Stage the \xa0 .gitmodules \xa0 changes: git add .gitmodules \n Delete the relevant section from \xa0 .git/config . \n Remove the submodule files from the working tree and index: git rm --cached path_to_submodule \xa0 (no trailing slash). \n Remove the submodule\'s \xa0 .git \xa0 directory: rm -rf .git/modules/path_to_submodule \n Commit the changes: git commit -m "Removed submodule <name>" \n Delete the now untracked submodule files: rm -rf path_to_submodule \n \n 步驟 \n 1.把cp2020的 .gitmodules \xa0刪掉 \n 2.打 git add .gitmodules指令 註:在cp2020裡目錄打指令 \n 3.打git rm --cached cmsimde \n 4.打rm -rf .git/modules/path_to_submodule #無法用rm，直接進到cp2020/.git檔/modules/刪掉cmsimde資料夾 \n 5.打git commit -m "cmsimde" \n 6.打rm -rf path_to_submodule\xa0#無法用rm，直接進到cp2020刪掉cmsimde資料夾 \n 7.git submodule add \xa0 https://github.com/mdecourse/cmsimde \n 8.git add . \n 9.git commit -m "name" \n 10.git push \n', 'tags': '', 'url': 'cmsimde錯誤.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};