
//获取本地设置的Snippet
function GetSnippetText() {
	var snippet = "\n\
snippet local\n\
	local ${1:val} = 0\n\
snippet table\n\
	local ${1:tab}= {} \n\
snippet function\n\
	function ${1:game}(obj) \n\
		${2:--todo}\n\
	end\n\
snippet if\n\
	if ${1:condition} then\n\
		${2:--todo}\n\
	end\n\
snippet if.else\n\
	if ${1:condition} then\n\
		${2:--todo when condition true}\n\
	else\n\
		${3:--todo when every conditions false}\n\
	end\n\
snippet for\n\
	for i = 0 ,${1:max} do\n\
		--todo\n\
		print(i)\n\
	end\n\
snippet for pairs\n\
	for k ,v in pairs(${1:tab}) do\n\
		--todo\n\
		print(k,v)\n\
	end\n\
snippet while\n\
	${1:val} = 0\n\
	while ${2:val < 5} do\n\
		${3:--todo}\n\
		${4:val = val + 1}\n\
	end\n\
snippet repeat\n\
	${1:val} = 0\n\
	repeat\n\
		${2:--todo}\n\
		${3:val = val + 1}\n\
	until ${4:condition}\n\
snippet math.sin\n\
	math.sin(${1:deg})\n\
snippet math.asin\n\
	math.asin(${1:rad})\n\
snippet math.cos\n\
	math.cos(${1:deg})\n\
snippet math.acos\n\
	math.acos(${1:rad})\n\
snippet math.tan\n\
	math.tan(${1:deg})\n\
snippet math.atan\n\
	math.atan(${1:rad})\n\
snippet math.exp\n\
	math.exp(${1:x})\n\
snippet math.log\n\
	math.log(${1:x})\n\
snippet math.log10\n\
	math.log(${1:x})\n\
snippet math.frexp\n\
	math.frexp(${1:val})\n\
snippet math.ldexp\n\
	math.ldexp(${1:x},y)\n\
snippet math.pi\n\
	math.pi\n\
snippet math.abs\n\
	math.abs(${1:val})\n\
snippet math.pow\n\
	math.pow(${1:m},n)\n\
snippet math.sqrt\n\
	math.sqrt(${1:m})\n\
snippet math.mod\n\
	math.mod(${1:val1},val2)\n\
snippet math.modf\n\
	math.modf(${1:float})\n\
snippet math.rad\n\
	math.rad(${1:val})\n\
snippet math.deg\n\
	math.deg(${1:val})\n\
snippet math.floor\n\
	math.floor(${1:val})\n\
snippet math.ceil\n\
	math.ceil(${1:val})\n\
snippet math.max\n\
	math.max(${1:str})\n\
snippet math.min\n\
	math.min(${1:str})\n\
snippet math.randomseed\n\
	math.randomseed(os.time())\n\
snippet math.random\n\
	math.random()\n\
snippet math.random\n\
	math.random(${1:n})\n\
snippet math.random\n\
	math.random(${1:m},n)\n\
snippet table.insert\n\
	table.insert(${1:tab}, ${2:val})\n\
snippet table.insert\n\
	table.insert(${1:tab},${2:n},${3:val})\n\
snippet table.remove\n\
	table.remove(${1:tab})\n\
snippet table.remove\n\
	table.remove(${1:tab},n)\n\
snippet table.remove\n\
	table.remove(${1:tab})\n\
snippet table.remove\n\
	table.remove(${1:tab},',')\n\
snippet table.remove\n\
	table.remove(${1:tab},',',m,n)\n\
snippet table.sort\n\
	table.sort(${1:tab})\n\
snippet table.sort\n\
	table.sort(${1:tab}, function (a, b) if a > b then return true end end)  --排序tab内元素，z-a，降序\n\
snippet os.clock\n\
	os.clock()\n\
snippet os.time\n\
	os.time()\n\
snippet os.difftime\n\
	os.difftime(m,n)\n\
snippet os.date\n\
	os.date('*t')\n\
snippet os.date API\n\
	--%a - Abbreviated weekday name (eg. Wed)\n\
	--%A - Full weekday name (eg. Wednesday)\n\
	--%b - Abbreviated month name (eg. Sep)\n\
	--%B - Full month name (eg. September)\n\
	--%c - Date and time representation appropriate for locale (eg. 23/04/07 10:20:41)\n\
	--%d - Day of month as decimal number (01 - 31)\n\
	--%H - Hour in 24-hour format (00 - 23)\n\
	--%I - Hour in 12-hour format (01 - 12)\n\
	--%j - Day of year as decimal number (001 - 366)\n\
	--%m - Month as decimal number (01 - 12)\n\
	--%M - Minute as decimal number (00 - 59)\n\
	--%p - Current locale's A.M./P.M. indicator for 12-hour clock (eg. AM/PM)\n\
	--%S - Second as decimal number (00 - 59)\n\
	--%U - Week of year as decimal number, with Sunday as first day of week 1 (00 - 53)\n\
	--%w - Weekday as decimal number (0 - 6; Sunday is 0)\n\
	--%W - Week of year as decimal number, with Monday as first day of week 1 (00 - 53)\n\
	--%x - Date representation for current locale (Standard date string)\n\
	--%X - Time representation for current locale (Standard time string)\n\
	--%y - Year without century, as decimal number (00 - 99)  (eg. 07)\n\
	--%Y - Year with century, as decimal number (eg. 2007)\n\
	--%Z - Time-zone name or abbreviation; no characters if time zone is unknown\n\
	--%% - Percent sign\n\
snippet string.len\n\
	string.len(${1:str})\n\
snippet string.sub\n\
	string.sub(${1:str},m,n)\n\
snippet string.rep\n\
	string.rep(${1:str},n)\n\
snippet string.lower\n\
	string.lower(${1:str})\n\
snippet string.upper\n\
	string.upper(${1:str})\n\
snippet string.char\n\
	string.char(${1:ASCII})\n\
snippet string.byte\n\
	string.byte(${1:str},n)\n\
snippet string.reverse\n\
	string.reverse(${1:str})\n\
snippet string.format\n\
	string.format(${1:val},str)\n\
snippet string.find\n\
	string.find(${1:str},n,1)\n\
snippet string.gmatch\n\
	string.gmatch(${1:str},st)\n\
snippet string.match\n\
	string.match(${1:st1},st2)\n\
snippet string.gsub\n\
	string.gsub(${1:str},m,n,num)\n\
snippet string.gsub pattern API\n\
	-- .	all characters\n\
	-- %a	letters\n\
	-- %c	control characters\n\
	-- %d	digits\n\
	-- %l	lower case letters\n\
	-- %p	punctuation characters\n\
	-- %s	space characters\n\
	-- %u	upper case letters\n\
	-- %w	alphanumeric characters\n\
	-- %x	hexadecimal digits\n\
	-- %z	the character with representation 0\n\
snippet string.format definition API\n\
	--%s - takes a string and formats it according to the given parameters\n\
	--%d - takes a number and converts it to signed integer format\n\
	--%f - accepts a number and converts it to floating point format (decimal number), retains 6 decimal places by default, and fills the insufficient places with 0\n\
	--%x - takes a number and converts it to lowercase hexadecimal format\n\
	--%X - takes a number and converts it to uppercase hexadecimal format\n\
	--%c - accept a number and convert it to the corresponding character in the ASCII code table\n\
	--%d, %i - take a number and convert it to signed integer format\n\
	--%o - takes a number and converts it to octal format\n\
	--%u - takes a number and converts it to unsigned integer format\n\
	--%x - takes a number and converts it to hexadecimal format, using lowercase letters\n\
	--%X - takes a number and converts it to hexadecimal format, using capital letters\n\
	--%e - takes a number and converts it to scientific notation format, using the lowercase letter e\n\
	--%E - takes a number and converts it to scientific notation format, using capital letter E\n\
	--%f - takes a number and converts it to floating point format\n\
	--%g(%G) - accept a number and convert it to %e (%E, corresponding to %G) or %f, whichever is shorter\n\
	--%q - takes a string and converts it into a format safe to be read by the Lua compiler\n\
	--%s - takes a string and formats it according to the given parameters\n\
snippet ToCHINA\n\
	local function ToCN(number)\n\
		local tostr = tostring(number) --把传入的数字转为字符串\n\
		local strsize = #tostr --获取输入的字符串长度\n\
		local strCN = ''   --创建空字符串，用来储存结果\n\
		local tabCN = {'一','二','三','四','五','六','七','八','九'}  --制定中文数字模板列表\n\
		for i = 1 , strsize do\n\
			--根据字符串长度决定取几次\n\
			local substr = string.sub(tostr,i,i)  --取字符串的第i位内容  \n\
			local tonum = tonumber(substr)   --把字符串转为数字\n\
			strCN = strCN..tabCN[tonum]  --取出对应位置的中文数字\n\
		end\n\
		return strCN\n\
	end\n\
	Chat:sendSystemMsg((ToCN(520)), 0) --传入数字，并把转换后的结果打印在聊天区\n\
snippet threadpool:wait\n\
	threadpool:wait(${1:second})\n\
snippet ClickBlock\n\
	function ClickBlock(obj)\n\
		local playerid = obj.eventobjid --Event Object ID\n\
		local blockid = obj.blockid --Current Block ID\n\
		local x,y,z = obj.x,obj.y,obj.z --Current Block X,Y,Z Position\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)\n\
snippet ClickActor\n\
	function ClickActor(obj)\n\
		local playerid = obj.eventobjid--Event Object ID\n\
		local actid = obj.toobjid --Current Clicked Actor\n\
		local x,y,z = obj.x,obj.y,obj.z --Current Clicked Actor X,Y,Z Position\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)\n\
snippet InputKeyDown\n\
	function InputKeyDown(obj)\n\
		local playerid = obj.eventobjid --Event Object ID\n\
		local key = obj.vkey --Current Virtual Key\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.InputKeyDown]=], InputKeyDown)\n\
snippet InputKeyOnPress\n\
	function InputKeyOnPress(obj)\n\
		local playerid = obj.eventobjid--Event Object ID\n\
		local key = obj.vkey  --Current Virtual Key\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.InputKeyOnPress]=], InputKeyOnPress)\n\
snippet InputKeyUp\n\
	function InputKeyUp(obj)\n\
		local playerid = obj.eventobjid --Event Object ID\n\
		local key = obj.vkey  --Current Virtual Key\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.InputKeyUp]=], InputKeyUp)\n\
snippet NewInputContent\n\
	function NewInputContent(obj)\n\
		local playerid = obj.eventobjid --Event Object ID\n\
		local st = obj.content --Current Player Chated Content\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.NewInputContent]=], NewInputContent)\n\
snippet GameStart\n\
	function GameStart()\n\
	--\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Game.Start]=], GameStart)\n\
snippet Game Run\n\
	function GameRun()\n\
	--\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Game.Run]=], GameRun)\n\
snippet GameEnd\n\
	function GameEnd()\n\
	--\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Game.End]=],GameEnd)\n\
snippet MoveOneBlockSize\n\
	function MoveOne()\n\
	--\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.MoveOneBlockSize]=],MoveOne)\n\
snippet minitimerchange\n\
	local ret,timeid = MiniTimer:createTimer('timer')\n\
	local ret, num, objIds = World:getAllPlayers()\n\
	MiniTimer:showTimerTips(objIds, timeid, 'Countdown: ', true)\n\
	MiniTimer:startBackwardTimer(timeid,20,false)\n\
	--MiniTimer:startForwardTimer(timeid)\n\
	function change(obj)\n\
		local tid = obj.timerid\n\
		local tname = obj.timername\n\
		local result,second=MiniTimer:getTimerTime(tid)\n\
		if second < 1 then\n\
			MiniTimer:stopTimer(tid) \n\
			MiniTimer:showTimerTips(objIds, timeid, 'Countdown: ', false)\n\
		end \n\
	end\n\
	ScriptSupportEvent:registerEvent([=[minitimer.change]=],change)\n\
snippet drawcube\n\
	local mapx = 0 \n\
	local mapy = 7 \n\
	local mapz = 0\n\
	local mapk = 10 --width\n\
	local mapl = 30 --long\n\
	local maph = 8  --height\n\
	local woodblock = 1120 --what cubes to use\n\
	for L = mapx , mapx + mapk do \n\
		for H = mapz, mapz + mapl do \n\
			Block:replaceBlock(woodblock, L, mapy-1, H, 0) \n\
		end \n\
	end \n\
	for i = mapx , mapx + mapk do\n\\n\
		for h = mapy, mapy + maph do \n\
			Block:replaceBlock(woodblock, i, h, mapz-1, 0) \n\
			Block:replaceBlock(woodblock, i, h , mapz +mapl+1   , 0) \n\
		end\n\
	end\n\
	for j = mapz , mapz + mapl do\n\
		for h = mapy, mapy + maph do \n\
			Block:replaceBlock(woodblock, mapx -1, h,  j  , 0) \n\
			Block:replaceBlock(woodblock, mapx + mapk +1, h, j , 0) \n\
		end\n\
	end	\n\
snippet playmusicsound\n\
    -- tone [1] treble, [2] alto, [3] bass\n\
	local muisc = { \n\
	{2.00, 2.12 ,2.24, 2.38, 2.52, 2.67, 2.83, 3.00, 3.17, 3.36, 3.56, 3.78},\n\
	{1.00, 1.06, 1.12, 1.19, 1.26, 1.33, 1.41, 1.50, 1.59, 1.68, 1.78, 1.89},\n\
	{0.50, 0.53, 0.56, 0.59, 0.63, 0.67, 0.71, 0.75, 0.79, 0.84, 0.89, 0.94}} ---\n\
	--10768~10775 Electronics, 10776~10783, Drum 10784~10792 \n\
	Player:playMusic(0, 10785, 10 ,muisc[1][1], false) \n\
snippet WeatherChanged\n\
	ScriptSupportEvent:registerEvent([=[Weather.Changed]=],Changed)\n\
snippet Backpack\n\
	ScriptSupportEvent:registerEvent([=[Backpack.ItemTakeOut]=],ItemTakeOut)--blockid, x, y, z, itemid, itemnum\n\
	ScriptSupportEvent:registerEvent([=[Backpack.ItemPutIn]=],ItemPutIn)--blockid, x, y, z, itemid, itemnum\n\
	ScriptSupportEvent:registerEvent([=[Backpack.ItemChange]=],ItemChange)--blockid, x, y, z, itemid, itemnum\n\
snippet GameLoop\n\
	ScriptSupportEvent:registerEvent([=[Game.Start]=],Start)\n\
	ScriptSupportEvent:registerEvent([=[Game.End]=],End)\n\
	ScriptSupportEvent:registerEvent([=[Game.Load]=],Load)\n\
snippet GameTime\n\
	ScriptSupportEvent:registerEvent([=[Game.Hour]=],Hour)--hour \n\
	ScriptSupportEvent:registerEvent([=[Game.RunTime]=],RunTime)--second\n\
	ScriptSupportEvent:registerEvent([=[Game.TimeOver]=],TimeOver)\n\
snippet GameAnyPlayer\n\
	ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.EnterGame]=],EnterGame)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.LeaveGame]=],LeaveGame)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.Victory]=],Victory)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.Defeat]=],Defeat)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.ReadStage]=],ReadStage)\n\
snippet PlayerEquip\n\
	ScriptSupportEvent:registerEvent([=[Player.EquipChange]=],EquipChange)\n\
	ScriptSupportEvent:registerEvent([=[Player.EquipOn]=],EquipOn)--eventobjid, toobjid, itemid, itemnum\n\
	ScriptSupportEvent:registerEvent([=[Player.EquipOff]=],EquipOff)--eventobjid, toobjid, itemid, itemnum\n\
snippet PlayerItem\n\
	ScriptSupportEvent:registerEvent([=[Player.AddItem]=],AddItem)--eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.ConsumeItem]=],ConsumeItem)--eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.DiscardItem]=],DiscardItem)--eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Item.Disappear]=],Disappear)--eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Item.Pickup]=],Pickup)--eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.UseItem]=],UseItem)--eventobjid, toobjid, itemid, itemnum \n\
snippet PlayerPickDropItem\n\
	ScriptSupportEvent:registerEvent([=[DropItem.AreaIn]=],AreaIn)--eventobjid, areaid, itemid(opt), itemnum(opt) \n\
	ScriptSupportEvent:registerEvent([=[DropItem.AreaOut]=],AreaOut)--eventobjid, areaid, itemid(opt), itemnum(opt) \n\
	ScriptSupportEvent:registerEvent([=[Player.PickUpItem]=],PickUpItem)--eventobjid, toobjid, itemid, itemnum \n\
snippet PlayerArea\n\
	ScriptSupportEvent:registerEvent([=[Player.AreaIn]=],AreaIn)--eventobjid, areaid \n\
	ScriptSupportEvent:registerEvent([=[Player.AreaOut]=],AreaOut)--eventobjid, areaid \n\
snippet PlayerDamage\n\
	ScriptSupportEvent:registerEvent([=[Player.Attack]=],Attack)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],AttackHit)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.BeHurt]=],BeHurt)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.DamageActor]=],DamageActor)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.DefeatActor]=],DefeatActor)--eventobjid, toobjid \n\
snippet PlayerContent\n\
	ScriptSupportEvent:registerEvent([=[Player.InputContent]=],InputContent)--eventobjid, content \n\
	ScriptSupportEvent:registerEvent([=[Player.NewInputContent]=],NewInputContent)--eventobjid, content \n\
snippet PlayerBackpack\n\
	ScriptSupportEvent:registerEvent([=[Player.BackPackChange]=],BackPackChange)--eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.EquipChange]=],EquipChange)--eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.SelectShortcut]=],SelectShortcut)--eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.ShortcutChange]=],ShortcutChange)--eventobjid, toobjid, itemid, itemnum \n\
snippet PlayerChangeAttribute\n\
	ScriptSupportEvent:registerEvent([=[Player.ChangeAttr]=],ChangeAttr)--eventobjid, playerattr \n\
snippet PlayerJoinTeam\n\
	ScriptSupportEvent:registerEvent([=[Player.JoinTeam]=],JoinTeam)--eventobjid, toobjid \n\
snippet PlayerMont\n\
	ScriptSupportEvent:registerEvent([=[Player.MountActor]=],MountActor)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.DismountActor]=],DismountActor)--eventobjid, toobjid \n\
snippet PlayerAction\n\
	ScriptSupportEvent:registerEvent([=[Player.Die]=],Die)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.Revive]=],Revive)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.MoveOneBlockSize]=],MoveOneBlockSize)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.MotionStateChange]=],MotionStateChange)--eventobjid, playermotion \n\
	ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],PlayAction)--eventobjid, act \n\
snippet ActorDamage\n\
	ScriptSupportEvent:registerEvent([=[Actor.Attack]=],Attack)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Actor.AttackHit]=],AttackHit)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Actor.BeHurt]=],BeHurt)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Actor.Beat]=],Beat)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Actor.Damage]=],Damage)--eventobjid, toobjid \n\
snippet ActorChangeAttr\n\
	ScriptSupportEvent:registerEvent([=[Actor.ChangeAttr]=],ChangeAttr)--eventobjid, toobjid \n\
snippet ActorChangeMotion\n\
	ScriptSupportEvent:registerEvent([=[Actor.ChangeMotion]=],ChangeMotion)--eventobjid, actormotion \n\
snippet ActorCollide\n\
	ScriptSupportEvent:registerEvent([=[Actor.Collide]=],Collide)--eventobjid, toobjid \n\
snippet ActorSpawn\n\
	ScriptSupportEvent:registerEvent([=[Actor.Create]=],Create)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Actor.Die]=],Die)--eventobjid, toobjid \n\
snippet ActorItemArea\n\
	ScriptSupportEvent:registerEvent([=[Actor.Projectile.Hit]=],Hit)--eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Missile.AreaIn]=],AreaIn)--eventobjid, areaid, itemid(opt), itemnum(opt) \n\
	ScriptSupportEvent:registerEvent([=[Missile.AreaOut]=],AreaOut)--eventobjid, areaid, itemid(opt), itemnum(opt) \n\
	ScriptSupportEvent:registerEvent([=[Missile.Create]=],Create)--eventobjid, toobjid, itemid, x, y, z \n\
snippet ActorArea\n\
	ScriptSupportEvent:registerEvent([=[Actor.AreaIn]=],AreaIn)--eventobjid, areaid \n\
	ScriptSupportEvent:registerEvent([=[Actor.AreaOut]=],AreaOut)--eventobjid, areaid \n\
snippet BlockSpawn\n\
	ScriptSupportEvent:registerEvent([=[Block.Add]=],BlockAdd)--blockid, x, y, z \n\
	ScriptSupportEvent:registerEvent([=[Block.DestroyBy]=],DestroyBy)--eventobjid(opt), blockid, x, y, z \n\
snippet BlockPlaceBy\n\
	ScriptSupportEvent:registerEvent([=[Block.PlaceBy]=],PlaceBy)--eventobjid, blockid, x, y, z \n\
snippet BlockRemove\n\
	ScriptSupportEvent:registerEvent([=[Block.Remove]=],Remove)--blockid, x, y, z \n\
snippet BlockTrigger\n\
	ScriptSupportEvent:registerEvent([=[Block.Trigger]=],Trigger)--eventobjid, blockid, x, y, z \n\
snippet BlockDig\n\
	ScriptSupportEvent:registerEvent([=[Block.Dig.Begin]=],DigBegin)--eventobjid, blockid, x, y, z\n\
	ScriptSupportEvent:registerEvent([=[Block.Dig.Cancel]=],Cancel)--eventobjid, blockid, x, y, z\n\
	ScriptSupportEvent:registerEvent([=[Block.Dig.End]=],DigEnd)--eventobjid, blockid, x, y, z\n\
snippet BlockFertilize\n\
	ScriptSupportEvent:registerEvent([=[Block.Fertilize]=],Fertilize)--eventobjid, blockid, x, y, z\n\
snippet Particle\n\
	ScriptSupportEvent:registerEvent([=[Particle.Mob.OnCreate]=],MobOnCreate)--eventobjid, effectid \n\
	ScriptSupportEvent:registerEvent([=[Particle.Player.OnCreate]=],PlayerOnCreate)--eventobjid, effectid \n\
	ScriptSupportEvent:registerEvent([=[Particle.Pos.OnCreate]=],PosOnCreate)--x, y, z, effectid \n\
	ScriptSupportEvent:registerEvent([=[Particle.Projectile.OnCreate]=],ProjectileOnCreate)--eventobjid, effectid\n\
snippet Chat:sendSystemMsg\n\
	Chat:sendSystemMsg(${1:string});\n\
snippet ScriptSupportEvent:registerEvent\n\
	ScriptSupportEvent:registerEvent([=[${1:Event}]=],${2:function})\n\
snippet PARAMETER_DATA_QUERY_ACTION\n\
	Greeting: 1\n\
	Bow Your Head And Think: 2\n\
	Crying: 3\n\
	Angry: 4\n\
	Stretch: 5\n\
	Victory (Happy): 6\n\
	Thanks: 7\n\
	Casual Actions: 8\n\
	Down: 9\n\
	Pose1: 10\n\
	Standing: 11\n\
	Run: 12\n\
	Lay Down To Sleep: 13\n\
	Sit Down: 14\n\
	Swimming: 15\n\
	Attack: 16\n\
	Death: 17\n\
	Hit: 18\n\
	Casual: 19\n\
	Hops: 20\n\
snippet PARAMETER_DATA_QUERY_GAMEMODE\n\
	Single Player Mode: 0 \n\
	Multiplayer Creative Mode: 1 \n\
	Hardcore Mode: 2 \n\
	Survival From Creative Mode: 3 \n\
	Edit Mode For Homemade Gameplay: 4 \n\
	Run Mode For Homemade Gameplay: 5 \n\
	Adventure Mode Free Mode: 6 \n\
	Recording Mode: 9 \n\
snippet PARAMETER_DATA_QUERY_STORAGE_COLUMN\n\
	Backpack Slot: 0\n\
	Hotbar: 1000\n\
	Chests: 3000\n\
	Equipment Slot: 8000\n\
snippet INCREASES_CURRENT_HEALTH\n\
	Actor:addHP(eventobjid,10)\n\
snippet PARAMETER_DATA_QUERY_TERRAIN\n\
	Flat Terrain: 0\n\
	Random Terrain: 1\n\
snippet PARAMETER_DATA_QUERY_EQUIPMENT_PARTS\n\
	Header: 0\n\
	Body: 1\n\
	Legs: 2\n\
	Feet: 3\n\
	Special Equipment: 4\n\
	Weapons: 5\n\
	Snippet Parameter Data Query -Enchantment Properties\n\
	Movement Speed: 0\n\
	Swimming Speed: 1\n\
	Speed Of Jumping Up: 2\n\
	Percentage Bonus When Attacking Others In Melee: 3\n\
	Percentage Bonus When Attacking Others From A Distance: 4\n\
	Percentage Bonus When Explosion Hits Others: 5\n\
	Bonus Percentage When Fire Attacking Others: 6\n\
	The Percentage Bonus When Poisoning Others: 7\n\
	Percentage Of Wither Bonus When Attacking Others: 8\n\
	Percentage Bonus When Attacking Players: 9\n\
	Percentage Bonus When Attacking Undead: 10\n\
	Bonus Percentage When Attacking Other Animals: 11\n\
	Percentage Bonus When Being Melee: 12\n\
	Percentage Bonus When Being Ranged: 13\n\
	Bonus Percentage When Attacked By Explosion: 14\n\
	Bonus Percentage When Attacked By Fire: 15\n\
	Percentage Bonus When Attacked By Poison: 16\n\
	Bonus Percentage When Attacked By Wither: 17\n\
	Percentage Of Fall Damage Bonus: 18\n\
	Melee Armor Bonus: 19\n\
	Ranged Armor Bonus: 20\n\
	Explosive Armor Bonus: 21\n\
	Absorb Damage: 22\n\
	Critical Damage Bonus: 23\n\
	Increase The Knockback Distance Of Attacking Others: 24\n\
	Reduced Knockback Distance: 25\n\
	Knockback Probability Resistance Value, 0.2 Means There Is A 20% Probability Of Not Being Knocked Back: 26\n\
	Mining Speed: 27\n\
	Digging Luck, 0.2 Means 20% Increased Drop Rate: 28\n\
	Monster Drop: 29\n\
	Field Of View Brightness 0 -1.0: 30\n\
	Character Size 0 -1.0: 31\n\
	Oxygen Supply 1: Can Only Be Used Underwater, 100: Can Only Be Used In Space, 101: Can Be Used 10000: Restore Oxygen: 32\n\
snippet PARAMETER_DATA_QUERY_SOUND\n\
	Mining: 0\n\
	Destruction: 1\n\
	Placement: 2\n\
	Fall: 3\n\
	Walk: 4\n\
snippet PARAMETER_DATA_QUERY_INSTANCE_TYPE\n\
	Players: 1\n\
	Creatures (Including Monsters, Animals, Npcs, Etc.): 2\n\
	Drops: 3\n\
	Throwing Objects: 4\n\
snippet PARAMETER_DATA_QUERY_KNAPSACK_TYPE\n\
	Hotbar: 1\n\
	Storage Column: 2\n\
	Equipment Slot: 3\n\
snippet PARAMETER_DATA_QUERY_TOWARDS\n\
	--Standard Parameters--Value Parameters--Description\n\
	Not Specified: -1\n\
	X Opposite Direction: 0\n\
	Positive X Direction: 1\n\
	Z Opposite Direction: 2\n\
	Positive Z Direction: 3\n\
	Reverse Direction Of Y: 4\n\
	Positive Y Direction: 5\n\
snippet PARAMETER_DATA_QUERY_BIOLOGICAL_PROPERTIES\n\
	Max Health: 1\n\
	Current Health: 2\n\
	Health Regeneration: 3\n\
	Max Hunger Bar: 5\n\
	Current Hunger Bar: 6\n\
	Max Oxygen Level: 7\n\
	Current Oxygen Value: 8\n\
	Oxygen Recovery Rate: 9\n\
	Movement Speed: 10\n\
	Running Speed: 11\n\
	Swimming Speed: 13\n\
	Jump Power: 14\n\
	Weight: 15\n\
	Dodge Rate: 16\n\
	Melee Attack: 17\n\
	Ranged Attack: 18\n\
	Melee Defense: 19\n\
	Ranged Defense: 20\n\
	Model Size: 21\n\
Snippet PARAMETER_DATA_QUERY_BIOLOGICAL_PROPERTY_SETTINGS\n\
	Movable: 1\n\
	Attackable: 32\n\
	Hackable: 64\n\
	Can Be Killed: 128\n\
	Items That Can Be Picked Up: 256\n\
	Death Drop: 512\n\
snippet PARAMETER_DATA_QUERY_BIOLOGICAL_BEHAVIOR\n\
	Free: 1\n\
	Standby: 2\n\
	Wandering: 3\n\
	Melee Attack: 4\n\
	Ranged Attack: 5\n\
	Follow: 6\n\
	Swimming: 7\n\
	Escape: 8\n\
	Explode: 9\n\
	Attracted: 10\n\
	Mating: 11\n\
snippet PARAMETER_DATA_QUERY_PLAYER_ATTRIBUTES\n\
	Max Health: 1\n\
	Current Health: 2\n\
	Health Regeneration: 3\n\
	Lives: 4\n\
	Max Hunger Bar: 5\n\
	Current Hunger Bar: 6\n\
	Max Oxygen Level: 7\n\
	Current Oxygen Value: 8\n\
	Oxygen Recovery Rate: 9\n\
	Movement Speed: 10\n\
	Running Speed: 11\n\
	Sneak Speed: 12\n\
	Swimming Speed: 13\n\
	Jump Power: 14\n\
	Dodge Rate: 16\n\
	Melee Attack: 17\n\
	Ranged Attack: 18\n\
	Melee Defense: 19\n\
	Ranged Defense: 20\n\
	Size: 21\n\
	Score: 22\n\
	Level: 23\n\
snippet PARAMETER_DATA_QUERY_PLAYER_PROPERTY_SETTINGS\n\
	Movable: 1\n\
	Placeable Blocks: 2\n\
	Actionable Blocks: 4\n\
	Destructible Blocks: 8\n\
	Available Props: 16\n\
	Attackable: 32\n\
	Hackable: 64\n\
	Can Be Killed: 128\n\
	Items That Can Be Picked Up: 256\n\
	Death Drop: 512\n\
	Vehicle Auto Forward: 1024\n\
	Disposable Items: 2048\n\
Snippet PARAMETER_DATA_QUERY_PLAYER_ITEM_SETTINGS\n\
	Items Cannot Be Dropped: 1\n\
	Items Cannot Drop: 2\n\
snippet PARAMETER_DATA_QUERY_PLAYER_BEHAVIOR\n\
	Still: 0\n\
	Walk: 1\n\
	Running: 2\n\
	Jump: 4\n\
	Double Jump: 8\n\
	Stealth: 16\n\
	Landing: 32\n\
snippet PARAMETER_DATA_QUERY_TEAM_ATTRIBUTES\n\
	Number Of Players: 1\n\
	Score: 2\n\
snippet PARAMETER_DATA_QUERY_DAMAGE_TYPE\n\
	Melee Damage: 0: HURTTYPE.MELEE\n\
	Remote Damage: 1: HURTTYPE.REMOTE\n\
	Explosion Damage: 2: HURTTYPE.BOMB\n\
	Physical Damage: 3: HURTTYPE.PHYSICS\n\
	Burning Damage: 3: HURTTYPE.BURNING\n\
	Toxin Damage: 4: HURTTYPE.TOXIN\n\
	Wither Damage: 5: HURTTYPE.WITHER\n\
	Elemental Damage: 6: HURTTYPE.MAGIC\n\
	Sunshine: 6: HURTTYPE.SUN\n\
	Fall Damage: 7: HURTTYPE.FALL\n\
	Hit Damage: 8: HURTTYPE.ANVIL\n\
	Cactus Damage: 9: HURTTYPE.CACTUS\n\
	Suffocation Damage: 10: HURTTYPE.ASPHYXIA\n\
	Drowning Damage: 11: HURTTYPE.DROWN\n\
	Underwater creatures suffocate in air Damage: 12: HURTTYPE.SUFFOCATE\n\
	Anti-Injury: 13: HURTTYPE.ANTIINJURY\n\
	Damaged By Laser: 14: HURTTYPE.LASER\n\
snippet PARAMETER_DATA_QUERY_BLOCK_PROPERTIES\n\
	Explosion Resistance: 1\n\
	Hardness: 2\n\
	Coasting Inertia: 3\n\
	Burn Rate: 4\n\
	Burn Chance: 5\n\
	Brightness: 6\n\
snippet PARAMETER_DATA_QUERY_BLOCK_ATTRIBUTE_SETTING\n\
	Breakable: 1\n\
	Operable: 2\n\
	Can Be Pushed: 4\n\
	Items That Can Drop: 8\n\
	Pushed To Drop: 16\n\
snippet PARAMETER_DATA_QUERY_BLOCK_STATE\n\
	Active (Activated): 1\n\
	Inactive (Not Activated): 2\n\
snippet PARAMETER_DATA_QUERY_WEATHER_STATUS\n\
	Rain Or Shine: 0\n\
	Sunny: 1\n\
	Rainy Day: 2\n\
snippet PARAMETER_DATA_QUERY_VIEW_DIRECTION\n\
	Main View: 0\n\
	Back View: 1\n\
	Front View: 2\n\
	Looking Down: 3\n\
	Custom Views: 4\n\
snippet PARAMETER_DATA_QUERY_TEMPLATE_LIBRARY_TYPE\n\
	None: 0\n\
	Blocks: 1\n\
	Props: 2\n\
	Creatures: 3\n\
	Effects: 4\n\
	Sound Effects: 5\n\
snippet PARAMETER_DATA_QUERY_VARIABLE_LIBRARY_TYPE\n\
	Position: 1\n\
	Region: 2\n\
	Value: 3\n\
	String: 4\n\
	Boolean: 5\n\
	Players: 6\n\
	Player Group: 7\n\
	Block Type: 8\n\
	Item Type: 9\n\
	Creatures: 10\n\
	Actor Type: 11\n\
	Creature Group: 12\n\
	Timer: 13\n\
	Effect Type: 14\n\
snippet PARAMETER_DATA_QUERY_BLOCK_ORIENTATION\n\
	East: FACE_DIRECTION.DIR_POS_X\n\
	South: FACE_DIRECTION.DIR_NEG_Z\n\
	West: FACE_DIRECTION.DIR_NEG_X\n\
	North: FACE_DIRECTION.DIR_POS_Z\n\
	Up: FACE_DIRECTION.DIR_POS_Y\n\
	Down: FACE_DIRECTION.DIR_NEG_Y\n\
snippet PARAMETER_DATA_QUERY_TEAM_ID\n\
	Team 1-Red: 1\n\
	Team 2-Blue: 2\n\
	Team 3-Green: 3\n\
	Team 4-Yellow: 4\n\
	Team 5-Orange: 5\n\
	Team 6-Purple: 6\n\
snippet GameRule_GameRule_set time\n\
	Gamerule.Curtime = 1 --Set The Time, Set Before Game.Start\N\
snippet GameRule_GameRule_Lock Time\n\
	Gamerule.Timelocked = 0 --Lock Time 0 No 1 Yes, Set Before Game.Start\N\
snippet GameRule_GameRule_Set Weather\n\
	Gamerule.Weather = 0 --Set 0 Sunny And 1 Rainy, Set Before Game.Start\N\
snippet GameRule_GameRule_number of players\n\
	Gamerule.Maxplayers = 10 --The Maximum Number Of Players, Set Before Game.Start\N\
snippet GameRule_GameRule_Whether the block can be destroyed\n\
	Gamerule.Blockdestroy = 0 --Whether To Destroy The Block 0 No 1 Yes, Set Before Game.Start\N\
snippet GameRule_GameRule_placeable blocks\n\
	Gamerule.Blockplace = 0 --Blocks Can Be Placed 0 No 1 Yes, Set Before Game.Start\N\
snippet GameRule_GameRule_blocks can be used\n\
	Gamerule.Blockuse = 0 --Can Use The Block 0 No 1 Yes, Set Before Game.Start\N\
snippet GameRule_GameRule_Gravity Factor\n\
	Gamerule.Gravityfactor = 0 --Gravity Factor (Value Range 0.1~10), Set Before Game.Start\N\
snippet GameRule_GameRule_View Mode\n\
	Gamerule.Cameradir = 0 --Camera View Mode: 0/1/2: Default Main View/Front View/Back View, 3/4/5/6: Lock Main View/Front View/Back View/Down View, Set Before Game.Start\N\
snippet GameRule_GameRule_Enable method\n\
	Gamerule.Startmode = 0 --Enable Mode: 0 Owner/1 Automatic, Set Before Game.Start\N\
snippet GameRule_GameRule_number of players required to enable\n\
	Gamerule.Startplayers = 1 --The Number Of Players Required To Open, Set Before Game.Start\N\
snippet GameRule_GameRule_number of game teams\n\
	Gamerule.Teamnum = 1 --The Number Of Game Teams, Set Before Game.Start\N\
snippet GameRule_GameRule_No attack\n\
	Gamerule.Attackplayermode = 1 --Forbid Attack: 1 Player/2 Teammates, Set Before Game.Start\N\
snippet GameRule_GameRule_Game Duration\n\
	Gamerule.Endtime = 10 --Game Duration Setting, Set Before Game.Start\N\
snippet GameRule_GameRule_Victory score setting\n\
	Gamerule.Endscore = 10 --Victory Score Setting, Set Before Game.Start\N\
snippet GameRule_GameRule_beat the player to score\n\
	Gamerule.Scorekillplayer = 1 --Kill Player Score, Set Before Game.Start\N\
snippet GameRule_GameRule_Score for defeating monsters\n\
	Gamerule.Scorekillmob = 1 --Kill Mob Score, Set Before Game.Start\N\
snippet GameRule_GameRule_star score\n\
	Gamerule.Scorecollectstar = 1 --Score From Collecting Stars (Star Cube), Set Before Game.Start\N\
snippet GameRule_GameRule_Resurrection Mode\n\
	Gamerule.Revivemode = 1 --Resurrection Mode Setting: The Parameter Is Seconds, 0 Is Custom, You Need To Click It Yourself, Set It Before Game.Start\N\
snippet GameRule_GameRule_Resurrection Invincibility Time\n\
	Gamerule.Reviveinvulnerable = 1 --Revive With Invulnerable Buff: The Parameter Is Seconds, 0 Is The Default Duration (5 Seconds), Set Before Game.Start\N\
snippet GameRule_GameRule_Name Display\n\
	Gamerule.Displayname = 1 --Name Display 0 Is Displayed By Default, 1 Is Only For Your Own Side, 2 Is Only For The Opponent, And 3 Is Invisible, Set It Before Game.Start\N\
snippet GameRule_GameRule_Timeout Rule\n\
	Gamerule.Winloseendtime = 1 --Timeout Win Or Loss 0 By Score, 1 Win (Green) 2 Lose (Red), Set Before Game.Start\N\
snippet GameRule_GameRule_Kill Prompt\n\
	Gamerule.Killnotify = 1 --Notification Of Being Killed By A Player 1:True 0:False (Prompt In The System Chat), Set Before Game.Start\N\
snippet GameRule_GameRule_Background Music\n\
	Gamerule.Bgmusicmode = 1 --Background Music Mode 0: Off 1-8: Corresponding To Different Music (Prompt In System Chat), Set Before Game.Start\N\
snippet GameRule-Whether to spawn monsters\n\
	Gamerule.Mobgen = 1 --Whether To Spawn Mobs: -1: Spawn According To The Created Option, 0: Not Spawn, 1: Spawn, Set Before Game.Start\N\
snippet GameRule_GameRule_Respawn point selection\n\
	Gamerule.Spawnptmode = 1 --Spawn Point Selection 0: Randomly Select A Point 1: Choose The Nearest One, Set It Before Game.Start\N\
snippet GameRule_GameRule_minimap display\n\
	Gamerule.Minimapteams = 1 --Minimap Display: 0: All Visible 1: Different Teams Are Invisible, Set Before Game.Start\N\
snippet GameRule_GameRule_Drop Settings\n\
	Gamerule.Playerdiedrops = 0 --Whether The Player Drops Items After Death Or Not 0: Drop In Place 3: Drop To Storage Box Others: No Drop, Set Before Game.Start\N\
snippet GameRule_GameRule_display score and time\n\
	Gamerule.Displayscore = 1 --Display Score And Time 1:True 0:False, Set Before Game.Start\N\
snippet GameRule_GameRule_Life Settings\n\
	Gamerule.Lifenum = 1 --The Number Of Life In The Game, If The Number Of Deaths Reaches This Number, The Game Will End In Failure, Set Before Game.Start\N\
snippet GameRule_GameRule_Show Crosshair\n\
	Gamerule.Showsight = 1 --Show Sight: 1 Show, 2 Hide, Set Before Game.Start\N\
snippet GameRule_GameRule_Join midway\n\
	Gamerule.Allowmidwayjoin = 1 --Midway Join 0: Not Allowed 1: Allowed, Set Before Game.Start\N\
snippet GameRule_GameRule_spectator settings\n\
	Gamerule.Viewmode = 1 --Watch The Game After Failure 0: Disable 1: Enable, Set Before Game.Start\N\
snippet GameRule_GameRule_spectator type\n\
	Gamerule.Viewtype = 1 --Observation Type: 0-Free Spectator 1-Follow The Screen 2-Switchable, Set Before Game.Start\N\
snippet GameRule_GameRule_Turn Settings\n\
	Gamerule.Scoreresetround = 1 --Score Reset Round: Similar To A Football Game (Restart After Scoring) 1:True, Set Before Game.Start\N\
snippet GameRule-GameRule-color-changing score\n\
	Gamerule.Scorecolorchange = 1 --Custom Score, Every Time The Score Turns Red, Set It Before Game.Start\N\
";  
	return snippet;
}

//获取本地设置的Completer
function GetServiceFuncs() {
	var jsonObj = [
		{"name":"Actor.addBuff", "caption":"Actor:addBuff", "value":"Actor:addBuff(objid, buffid, bufflv, customticks)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.addEnchant", "caption":"Actor:addEnchant", "value":"Actor:addEnchant(objid, slot, enchantId, enchantLevel)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.addHP", "caption":"Actor:addHP", "value":"Actor:addHP(objid, hp)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.addOxygen", "caption":"Actor:addOxygen", "value":"Actor:addOxygen(objid, oxygen)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.appendSpeed", "caption":"Actor:appendSpeed", "value":"Actor:appendSpeed(objid, x, y, z)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.calcDirectionByAngle", "caption":"Actor:calcDirectionByAngle", "value":"Actor:calcDirectionByAngle(objid, yaw, pitch)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.calcDirectionByDirection", "caption":"Actor:calcDirectionByDirection", "value":"Actor:calcDirectionByDirection(objid, vx, vy, vz)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.calcDirectionByYawAngle", "caption":"Actor:calcDirectionByYawAngle", "value":"Actor:calcDirectionByYawAngle(objid, yaw, pitch)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.calcDirectionByYawDirection", "caption":"Actor:calcDirectionByYawDirection", "value":"Actor:calcDirectionByYawDirection(objid, vx, vy, vz)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.clearActorWithId", "caption":"Actor:clearActorWithId", "value":"Actor:clearActorWithId(actorid, bkill)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.clearAllBadBuff", "caption":"Actor:clearAllBadBuff", "value":"Actor:clearAllBadBuff(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.clearAllBuff", "caption":"Actor:clearAllBuff", "value":"Actor:clearAllBuff(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.findNearestBlock", "caption":"Actor:findNearestBlock", "value":"Actor:findNearestBlock(objid, blockid, blockRange)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getActionAttrState", "caption":"Actor:getActionAttrState", "value":"Actor:getActionAttrState(objid, actionattr)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getBodySize", "caption":"Actor:getBodySize", "value":"Actor:getBodySize(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getBuffLeftTick", "caption":"Actor:getBuffLeftTick", "value":"Actor:getBuffLeftTick(objid, buffid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getBuffList", "caption":"Actor:getBuffList", "value":"Actor:getBuffList(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getCurPlaceDir", "caption":"Actor:getCurPlaceDir", "value":"Actor:getCurPlaceDir(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getEyeHeight", "caption":"Actor:getEyeHeight", "value":"Actor:getEyeHeight(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getEyePosition", "caption":"Actor:getEyePosition", "value":"Actor:getEyePosition(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getFaceDirection", "caption":"Actor:getFaceDirection", "value":"Actor:getFaceDirection(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getFacePitch", "caption":"Actor:getFacePitch", "value":"Actor:getFacePitch(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getFaceYaw", "caption":"Actor:getFaceYaw", "value":"Actor:getFaceYaw(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getHP", "caption":"Actor:getHP", "value":"Actor:getHP(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getMaxHP", "caption":"Actor:getMaxHP", "value":"Actor:getMaxHP(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getObjType", "caption":"Actor:getObjType", "value":"Actor:getObjType(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getOxygen", "caption":"Actor:getOxygen", "value":"Actor:getOxygen(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getPosition", "caption":"Actor:getPosition", "value":"Actor:getPosition(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getRidingActorObjId", "caption":"Actor:getRidingActorObjId", "value":"Actor:getRidingActorObjId(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.hasBuff", "caption":"Actor:hasBuff", "value":"Actor:hasBuff(objid, buffid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.isMob", "caption":"Actor:isMob", "value":"Actor:isMob(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.isPlayer", "caption":"Actor:isPlayer", "value":"Actor:isPlayer(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.killSelf", "caption":"Actor:killSelf", "value":"Actor:killSelf(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.mountActor", "caption":"Actor:mountActor", "value":"Actor:mountActor(objid, mountobjid, posindex)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playAct", "caption":"Actor:playAct", "value":"Actor:playAct(objid, actid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playBodyEffect", "caption":"Actor:playBodyEffect", "value":"Actor:playBodyEffect(objid, type)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playBodyEffectByFile", "caption":"Actor:playBodyEffectByFile", "value":"Actor:playBodyEffectByFile(objid, filename, sync)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playBodyEffectById", "caption":"Actor:playBodyEffectById", "value":"Actor:playBodyEffectById(objid, particleId, scale)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playSound", "caption":"Actor:playSound", "value":"Actor:playSound(objid, name, volume, pitch, flag)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playSoundEffectById", "caption":"Actor:playSoundEffectById", "value":"Actor:playSoundEffectById(objid, soundId, volume, pitch, isLoop)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playSoundSpecial", "caption":"Actor:playSoundSpecial", "value":"Actor:playSoundSpecial(objid, name, type)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.randomActorID", "caption":"Actor:randomActorID", "value":"Actor:randomActorID(self)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.removeBuff", "caption":"Actor:removeBuff", "value":"Actor:removeBuff(objid, buffid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.removeEnchant", "caption":"Actor:removeEnchant", "value":"Actor:removeEnchant(objid, slot, enchantId)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setActionAttrState", "caption":"Actor:setActionAttrState", "value":"Actor:setActionAttrState(objid, actionattr, switch)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setAttackType", "caption":"Actor:setAttackType", "value":"Actor:setAttackType(objid, attacktype)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setBodyEffectScale", "caption":"Actor:setBodyEffectScale", "value":"Actor:setBodyEffectScale(objid, particleId, scale)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setFacePitch", "caption":"Actor:setFacePitch", "value":"Actor:setFacePitch(objid, pitch)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setFaceYaw", "caption":"Actor:setFaceYaw", "value":"Actor:setFaceYaw(objid, yaw)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setImmuneType", "caption":"Actor:setImmuneType", "value":"Actor:setImmuneType(objid, immunetype, isadd)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setPosition", "caption":"Actor:setPosition", "value":"Actor:setPosition(objid, x, y, z)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.stopBodyEffect", "caption":"Actor:stopBodyEffect", "value":"Actor:stopBodyEffect(objid, type)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.stopBodyEffectByFile", "caption":"Actor:stopBodyEffectByFile", "value":"Actor:stopBodyEffectByFile(objid, filename)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.stopBodyEffectById", "caption":"Actor:stopBodyEffectById", "value":"Actor:stopBodyEffectById(objid, particleId)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.stopSoundEffectById", "caption":"Actor:stopSoundEffectById", "value":"Actor:stopSoundEffectById(objid, soundId)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.tryMoveToActor", "caption":"Actor:tryMoveToActor", "value":"Actor:tryMoveToActor(self_objid, target_objid, speed)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.tryMoveToPos", "caption":"Actor:tryMoveToPos", "value":"Actor:tryMoveToPos(objid, x, y, z, speed)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.tryNavigationToPos", "caption":"Actor:tryNavigationToPos", "value":"Actor:tryNavigationToPos(objid, x, y, z, cancontrol)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.turnFacePitch", "caption":"Actor:turnFacePitch", "value":"Actor:turnFacePitch(objid, offset)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.turnFaceYaw", "caption":"Actor:turnFaceYaw", "value":"Actor:turnFaceYaw(objid, offset)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Area.blockInArea", "caption":"Area:blockInArea", "value":"Area:blockInArea(areaid, blockid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.blockInAreaRange", "caption":"Area:blockInAreaRange", "value":"Area:blockInAreaRange(blockid, posbeg, posend)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.clearAllBlock", "caption":"Area:clearAllBlock", "value":"Area:clearAllBlock(areaid, blockid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.clearAllBlockAreaRange", "caption":"Area:clearAllBlockAreaRange", "value":"Area:clearAllBlockAreaRange(posbeg, posend, blockid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.cloneArea", "caption":"Area:cloneArea", "value":"Area:cloneArea(areaid, deststartpos)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.cloneAreaRange", "caption":"Area:cloneAreaRange", "value":"Area:cloneAreaRange(posbeg, posend, deststartpos)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.createAreaRect", "caption":"Area:createAreaRect", "value":"Area:createAreaRect(pos, dim)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.createAreaRectByRange", "caption":"Area:createAreaRectByRange", "value":"Area:createAreaRectByRange(posBeg, posEnd)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.destroyArea", "caption":"Area:destroyArea", "value":"Area:destroyArea(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.expandArea", "caption":"Area:expandArea", "value":"Area:expandArea(areaid, x, y, z)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.fillBlock", "caption":"Area:fillBlock", "value":"Area:fillBlock(areaid, blockid, face)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.fillBlockAreaRange", "caption":"Area:fillBlockAreaRange", "value":"Area:fillBlockAreaRange(posbeg, posend, blockid, face)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAllCreaturesInAreaRange", "caption":"Area:getAllCreaturesInAreaRange", "value":"Area:getAllCreaturesInAreaRange(posbeg, posend)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAllObjsInAreaRange", "caption":"Area:getAllObjsInAreaRange", "value":"Area:getAllObjsInAreaRange(posbeg, posend, objtype)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAllObjsInAreaRangeByObjTypes", "caption":"Area:getAllObjsInAreaRangeByObjTypes", "value":"Area:getAllObjsInAreaRangeByObjTypes(posbeg, posend, objtypes)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAllPlayersInAreaRange", "caption":"Area:getAllPlayersInAreaRange", "value":"Area:getAllPlayersInAreaRange(posbeg, posend)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaByPos", "caption":"Area:getAreaByPos", "value":"Area:getAreaByPos(pos)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaCenter", "caption":"Area:getAreaCenter", "value":"Area:getAreaCenter(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaCreatures", "caption":"Area:getAreaCreatures", "value":"Area:getAreaCreatures(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaPlayers", "caption":"Area:getAreaPlayers", "value":"Area:getAreaPlayers(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaRectLength", "caption":"Area:getAreaRectLength", "value":"Area:getAreaRectLength(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaRectRange", "caption":"Area:getAreaRectRange", "value":"Area:getAreaRectRange(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getPosOffset", "caption":"Area:getPosOffset", "value":"Area:getPosOffset(srcpos, dim)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getRandomPos", "caption":"Area:getRandomPos", "value":"Area:getRandomPos(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.objInArea", "caption":"Area:objInArea", "value":"Area:objInArea(areaid, objid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.offsetArea", "caption":"Area:offsetArea", "value":"Area:offsetArea(areaid, x, y, z)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.posInArea", "caption":"Area:posInArea", "value":"Area:posInArea(pos, areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.replaceAreaBlock", "caption":"Area:replaceAreaBlock", "value":"Area:replaceAreaBlock(areaid, srcblockid, destblockid, face)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.replaceAreaRangeBlock", "caption":"Area:replaceAreaRangeBlock", "value":"Area:replaceAreaRangeBlock(posbeg, posend, srcblockid, destblockid, face)", "meta":"Area", "type":"local", "score":9},
		{"name":"Backpack.addItem", "caption":"Backpack:addItem", "value":"Backpack:addItem(playerid, itemid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.calcSpaceNumForItem", "caption":"Backpack:calcSpaceNumForItem", "value":"Backpack:calcSpaceNumForItem(playerid, itemid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.clearAllPack", "caption":"Backpack:clearAllPack", "value":"Backpack:clearAllPack(playerid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.clearPack", "caption":"Backpack:clearPack", "value":"Backpack:clearPack(playerid, bartype)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.discardItem", "caption":"Backpack:discardItem", "value":"Backpack:discardItem(playerid, gridid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.enoughSpaceForItem", "caption":"Backpack:enoughSpaceForItem", "value":"Backpack:enoughSpaceForItem(playerid, itemid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getBackpackBarIDRange", "caption":"Backpack:getBackpackBarIDRange", "value":"Backpack:getBackpackBarIDRange(bartype)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getBackpackBarItemList", "caption":"Backpack:getBackpackBarItemList", "value":"Backpack:getBackpackBarItemList(playerid, bartype)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getBackpackBarSize", "caption":"Backpack:getBackpackBarSize", "value":"Backpack:getBackpackBarSize(bartype)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getBackpackBarValidList", "caption":"Backpack:getBackpackBarValidList", "value":"Backpack:getBackpackBarValidList(playerid, bartype)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridDurability", "caption":"Backpack:getGridDurability", "value":"Backpack:getGridDurability(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridEnchantList", "caption":"Backpack:getGridEnchantList", "value":"Backpack:getGridEnchantList(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridItemID", "caption":"Backpack:getGridItemID", "value":"Backpack:getGridItemID(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridItemName", "caption":"Backpack:getGridItemName", "value":"Backpack:getGridItemName(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridNum", "caption":"Backpack:getGridNum", "value":"Backpack:getGridNum(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridStack", "caption":"Backpack:getGridStack", "value":"Backpack:getGridStack(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridToolType", "caption":"Backpack:getGridToolType", "value":"Backpack:getGridToolType(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getItemNumByBackpackBar", "caption":"Backpack:getItemNumByBackpackBar", "value":"Backpack:getItemNumByBackpackBar(playerid, bartype, itemid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.hasItemByBackpackBar", "caption":"Backpack:hasItemByBackpackBar", "value":"Backpack:hasItemByBackpackBar(playerid, bartype, itemid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.moveGridItem", "caption":"Backpack:moveGridItem", "value":"Backpack:moveGridItem(playerid, gridid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.removeGridItem", "caption":"Backpack:removeGridItem", "value":"Backpack:removeGridItem(playerid, gridid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.removeGridItemByItemID", "caption":"Backpack:removeGridItemByItemID", "value":"Backpack:removeGridItemByItemID(playerid, itemid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.setGridItem", "caption":"Backpack:setGridItem", "value":"Backpack:setGridItem(playerid, gridid, itemid, num, durability)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.swapGridItem", "caption":"Backpack:swapGridItem", "value":"Backpack:swapGridItem(playerid, gridsrc, griddst)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Block.destroyBlock", "caption":"Block:destroyBlock", "value":"Block:destroyBlock(x,y,z,dropitem)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockData", "caption":"Block:getBlockData", "value":"Block:getBlockData(x,y,z)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockDataByDir", "caption":"Block:getBlockDataByDir", "value":"Block:getBlockDataByDir(blockid, dir)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockID", "caption":"Block:getBlockID", "value":"Block:getBlockID(x,y,z)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockPowerStatus", "caption":"Block:getBlockPowerStatus", "value":"Block:getBlockPowerStatus(pos)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockSettingAttState", "caption":"Block:getBlockSettingAttState", "value":"Block:getBlockSettingAttState(blockid, attrtype)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockSwitchStatus", "caption":"Block:getBlockSwitchStatus", "value":"Block:getBlockSwitchStatus(pos)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.isAirBlock", "caption":"Block:isAirBlock", "value":"Block:isAirBlock(x,y,z)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.isLiquidBlock", "caption":"Block:isLiquidBlock", "value":"Block:isLiquidBlock(x,y,z)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.isSolidBlock", "caption":"Block:isSolidBlock", "value":"Block:isSolidBlock(x,y,z)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.placeBlock", "caption":"Block:placeBlock", "value":"Block:placeBlock(blockid, x, y, z,face)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.replaceBlock", "caption":"Block:replaceBlock", "value":"Block:replaceBlock(blockid,x,y,z,face)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.setBlockAll", "caption":"Block:setBlockAll", "value":"Block:setBlockAll(x,y,z,blockid,data)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.setBlockSettingAttState", "caption":"Block:setBlockSettingAttState", "value":"Block:setBlockSettingAttState(blockid, attrtype, switch)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.setBlockSwitchStatus", "caption":"Block:setBlockSwitchStatus", "value":"Block:setBlockSwitchStatus(pos, isactive)", "meta":"Block", "type":"local", "score":9},
		{"name":"Chat.sendChat", "caption":"Chat:sendChat", "value":"Chat:sendChat(content, targetuin)", "meta":"Chat", "type":"local", "score":9},
		{"name":"Chat.sendSystemMsg", "caption":"Chat:sendSystemMsg", "value":"Chat:sendSystemMsg(content, targetuin)", "meta":"Chat", "type":"local", "score":9},
		{"name":"Game.addRenderGlobalEffect", "caption":"Game:addRenderGlobalEffect", "value":"Game:addRenderGlobalEffect(path)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.doGameEnd", "caption":"Game:doGameEnd", "value":"Game:doGameEnd(self)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.getDefString", "caption":"Game:getDefString", "value":"Game:getDefString(id, ...)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.getScriptVar", "caption":"Game:getScriptVar", "value":"Game:getScriptVar(index)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.msgBox", "caption":"Game:msgBox", "value":"Game:msgBox(msg)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.removeRenderGlobalEffect", "caption":"Game:removeRenderGlobalEffect", "value":"Game:removeRenderGlobalEffect(effectid)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.sendScriptVars2Client", "caption":"Game:sendScriptVars2Client", "value":"Game:sendScriptVars2Client(self)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.setRenderGlobalEffectPos", "caption":"Game:setRenderGlobalEffectPos", "value":"Game:setRenderGlobalEffectPos(effectid, x, y, z)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.setRenderGlobalEffectScale", "caption":"Game:setRenderGlobalEffectScale", "value":"Game:setRenderGlobalEffectScale(effectid, scalex, scaley, scalez)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.setScriptVar", "caption":"Game:setScriptVar", "value":"Game:setScriptVar(index, val)", "meta":"Game", "type":"local", "score":9},
		{"name":"Item.getItemName", "caption":"Item:getItemName", "value":"Item:getItemName(itemid)", "meta":"Item", "type":"local", "score":9},
		{"name":"MapMark.deleteShape", "caption":"MapMark:deleteShape", "value":"MapMark:deleteShape(shapeid)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.newShape", "caption":"MapMark:newShape", "value":"MapMark:newShape(type, isshow, r, g, b)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.setShapeColor", "caption":"MapMark:setShapeColor", "value":"MapMark:setShapeColor(shapeid, r, g, b)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.showShape", "caption":"MapMark:showShape", "value":"MapMark:showShape(shapeid, showflag)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.updateCircle", "caption":"MapMark:updateCircle", "value":"MapMark:updateCircle(shapeid, cx, cz, r)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.updateLine", "caption":"MapMark:updateLine", "value":"MapMark:updateLine(shapeid, sx, sz, ex, ez)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.updateRectangle", "caption":"MapMark:updateRectangle", "value":"MapMark:updateRectangle(shapeid, sx, sz, w, h)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MiniTimer.changeTimeInterval", "caption":"MiniTimer:changeTimeInterval", "value":"MiniTimer:changeTimeInterval(id,interval)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.createTimer", "caption":"MiniTimer:createTimer", "value":"MiniTimer:createTimer(name, owid,isprivate)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.deleteTimer", "caption":"MiniTimer:deleteTimer", "value":"MiniTimer:deleteTimer(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.getTimerTime", "caption":"MiniTimer:getTimerTime", "value":"MiniTimer:getTimerTime(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.isExist", "caption":"MiniTimer:isExist", "value":"MiniTimer:isExist(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.pauseTimer", "caption":"MiniTimer:pauseTimer", "value":"MiniTimer:pauseTimer(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.resumeTimer", "caption":"MiniTimer:resumeTimer", "value":"MiniTimer:resumeTimer(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.showTimerTips", "caption":"MiniTimer:showTimerTips", "value":"MiniTimer:showTimerTips(playerids, timerid, text, show)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.startBackwardTimer", "caption":"MiniTimer:startBackwardTimer", "value":"MiniTimer:startBackwardTimer(id,interval,repeated)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.startForwardTimer", "caption":"MiniTimer:startForwardTimer", "value":"MiniTimer:startForwardTimer(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.stopTimer", "caption":"MiniTimer:stopTimer", "value":"MiniTimer:stopTimer(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"Creature.getActorID", "caption":"Creature:getActorID", "value":"Creature:getActorID(objid)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.getActorName", "caption":"Creature:getActorName", "value":"Creature:getActorName(objid)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.getAtt", "caption":"Creature:getAtt", "value":"Creature:getAtt(objid, attrtype)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.getTamedOwnerID", "caption":"Creature:getTamedOwnerID", "value":"Creature:getTamedOwnerID(objid)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.isAdult", "caption":"Creature:isAdult", "value":"Creature:isAdult(objid)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.setAIActive", "caption":"Creature:setAIActive", "value":"Creature:setAIActive(objid, v)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.setAtt", "caption":"Creature:setAtt", "value":"Creature:setAtt(objid, attrtype, val)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.setOxygenNeed", "caption":"Creature:setOxygenNeed", "value":"Creature:setOxygenNeed(objid, v)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.setPanic", "caption":"Creature:setPanic", "value":"Creature:setPanic(objid, v)", "meta":"Creature", "type":"local", "score":9},
		{"name":"ObjectLib.getAreaData", "caption":"ObjectLib:getAreaData", "value":"ObjectLib:getAreaData(uuid)", "meta":"ObjectLib", "type":"local", "score":9},
		{"name":"ObjectLib.getLivingData", "caption":"ObjectLib:getLivingData", "value":"ObjectLib:getLivingData(uuid)", "meta":"ObjectLib", "type":"local", "score":9},
		{"name":"ObjectLib.getPositionData", "caption":"ObjectLib:getPositionData", "value":"ObjectLib:getPositionData(uuid)", "meta":"ObjectLib", "type":"local", "score":9},
		{"name":"Player.changeViewMode", "caption":"Player:changeViewMode", "value":"Player:changeViewMode(objid, viewmode, islock)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.checkActionAttrState", "caption":"Player:checkActionAttrState", "value":"Player:checkActionAttrState(objid, actionattr)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.gainItems", "caption":"Player:gainItems", "value":"Player:gainItems(objid, itemid, num, prioritytype)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getAimPos", "caption":"Player:getAimPos", "value":"Player:getAimPos(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getAtt", "caption":"Player:getAtt", "value":"Player:getAtt(objid, attrtype)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getCurShotcut", "caption":"Player:getCurShotcut", "value":"Player:getCurShotcut(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getCurToolID", "caption":"Player:getCurToolID", "value":"Player:getCurToolID(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getDieTimes", "caption":"Player:getDieTimes", "value":"Player:getDieTimes(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getFoodLevel", "caption":"Player:getFoodLevel", "value":"Player:getFoodLevel(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getGameRanking", "caption":"Player:getGameRanking", "value":"Player:getGameRanking(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getGameResults", "caption":"Player:getGameResults", "value":"Player:getGameResults(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getGameScore", "caption":"Player:getGameScore", "value":"Player:getGameScore(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getHostUin", "caption":"Player:getHostUin", "value":"Player:getHostUin(self)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getLeftLifeNum", "caption":"Player:getLeftLifeNum", "value":"Player:getLeftLifeNum(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getMainPlayerUin", "caption":"Player:getMainPlayerUin", "value":"Player:getMainPlayerUin(self)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getNickname", "caption":"Player:getNickname", "value":"Player:getNickname(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getTeam", "caption":"Player:getTeam", "value":"Player:getTeam(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.isMainPlayer", "caption":"Player:isMainPlayer", "value":"Player:isMainPlayer(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.mountActor", "caption":"Player:mountActor", "value":"Player:mountActor(playerid, objid, posindex)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.notifyGameInfo2Self", "caption":"Player:notifyGameInfo2Self", "value":"Player:notifyGameInfo2Self(objid, info)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.onCurToolUsed", "caption":"Player:onCurToolUsed", "value":"Player:onCurToolUsed(objid, num)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.openDevStore", "caption":"Player:openDevStore", "value":"Player:openDevStore(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.playAct", "caption":"Player:playAct", "value":"Player:playAct(objid, actid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.playAdvertising", "caption":"Player:playAdvertising", "value":"Player:playAdvertising(objid, adname, eventname, eventparams)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.playMusic", "caption":"Player:playMusic", "value":"Player:playMusic(objid, musicId, volume, pitch, isLoop)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.removeBackpackItem", "caption":"Player:removeBackpackItem", "value":"Player:removeBackpackItem(objid, itemid, num)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.reviveToPos", "caption":"Player:reviveToPos", "value":"Player:reviveToPos(objid, x, y, z)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.rotateCamera", "caption":"Player:rotateCamera", "value":"Player:rotateCamera(objid, yaw, pitch)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setActionAttrState", "caption":"Player:setActionAttrState", "value":"Player:setActionAttrState(objid, actionattr, switch)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setAtt", "caption":"Player:setAtt", "value":"Player:setAtt(objid, attrtype, val)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setFoodLevel", "caption":"Player:setFoodLevel", "value":"Player:setFoodLevel(objid, foodLevel)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setGameRanking", "caption":"Player:setGameRanking", "value":"Player:setGameRanking(objid, rank)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setGameResults", "caption":"Player:setGameResults", "value":"Player:setGameResults(objid, result)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setGameScore", "caption":"Player:setGameScore", "value":"Player:setGameScore(objid, score)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setGameWin", "caption":"Player:setGameWin", "value":"Player:setGameWin(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setItemAttAction", "caption":"Player:setItemAttAction", "value":"Player:setItemAttAction(objid, itemid, attrtype, switch)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setPosition", "caption":"Player:setPosition", "value":"Player:setPosition(objid, x, y, z)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setRevivePoint", "caption":"Player:setRevivePoint", "value":"Player:setRevivePoint(objid, x, y, z)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setSkillCD", "caption":"Player:setSkillCD", "value":"Player:setSkillCD(objid, itemid, cd)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setTeam", "caption":"Player:setTeam", "value":"Player:setTeam(objid, teamid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.stopMusic", "caption":"Player:stopMusic", "value":"Player:stopMusic(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.teleportHome", "caption":"Player:teleportHome", "value":"Player:teleportHome(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.useItem", "caption":"Player:useItem", "value":"Player:useItem(objid, itemid, status, onshift)", "meta":"Player", "type":"local", "score":9},
		{"name":"Spawnport.getChunkValidSpawnPos", "caption":"Spawnport:getChunkValidSpawnPos", "value":"Spawnport:getChunkValidSpawnPos(x, y, z)", "meta":"Spawnport", "type":"local", "score":9},
		{"name":"Spawnport.getSpawnPoint", "caption":"Spawnport:getSpawnPoint", "value":"Spawnport:getSpawnPoint(self)", "meta":"Spawnport", "type":"local", "score":9},
		{"name":"Team.addTeamDieTimes", "caption":"Team:addTeamDieTimes", "value":"Team:addTeamDieTimes(teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.addTeamScore", "caption":"Team:addTeamScore", "value":"Team:addTeamScore(teamid, score)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.changePlayerTeam", "caption":"Team:changePlayerTeam", "value":"Team:changePlayerTeam(playerid, teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getNumTeam", "caption":"Team:getNumTeam", "value":"Team:getNumTeam(self)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamCreatures", "caption":"Team:getTeamCreatures", "value":"Team:getTeamCreatures(teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamDieTimes", "caption":"Team:getTeamDieTimes", "value":"Team:getTeamDieTimes(teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamPlayerNum", "caption":"Team:getTeamPlayerNum", "value":"Team:getTeamPlayerNum(teamid, alive)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamPlayers", "caption":"Team:getTeamPlayers", "value":"Team:getTeamPlayers(teamid, alive)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamResults", "caption":"Team:getTeamResults", "value":"Team:getTeamResults(teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamScore", "caption":"Team:getTeamScore", "value":"Team:getTeamScore(teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.randomTeamPlayer", "caption":"Team:randomTeamPlayer", "value":"Team:randomTeamPlayer(teamid, alive)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.setTeamDieTimes", "caption":"Team:setTeamDieTimes", "value":"Team:setTeamDieTimes(teamid, times)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.setTeamPlayersResults", "caption":"Team:setTeamPlayersResults", "value":"Team:setTeamPlayersResults(teamid, result)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.setTeamResults", "caption":"Team:setTeamResults", "value":"Team:setTeamResults(teamid,result)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.setTeamScore", "caption":"Team:setTeamScore", "value":"Team:setTeamScore(teamid, score)", "meta":"Team", "type":"local", "score":9},
		{"name":"UI.ShowScreenEffect", "caption":"UI:ShowScreenEffect", "value":"UI:ShowScreenEffect(type, isloop, incspeed)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.hide", "caption":"UI:hide", "value":"UI:hide(name)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.list", "caption":"UI:list", "value":"UI:list(opt)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.load", "caption":"UI:load", "value":"UI:load(path)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.makedummy", "caption":"UI:makedummy", "value":"UI:makedummy(name)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.setGBattleUI", "caption":"UI:setGBattleUI", "value":"UI:setGBattleUI(name, value)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.setMinimapRenderMode", "caption":"UI:setMinimapRenderMode", "value":"UI:setMinimapRenderMode(mode)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.setShapeCircle", "caption":"UI:setShapeCircle", "value":"UI:setShapeCircle(uiname, x, y, radius)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.setShapeLine", "caption":"UI:setShapeLine", "value":"UI:setShapeLine(uiname, p1x, p1y, p2x, p2y)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.show", "caption":"UI:show", "value":"UI:show(name)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.world2RadarDist", "caption":"UI:world2RadarDist", "value":"UI:world2RadarDist(length)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.world2RadarPos", "caption":"UI:world2RadarPos", "value":"UI:world2RadarPos(x, y)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.xmllist", "caption":"UI:xmllist", "value":"UI:xmllist(self)", "meta":"UI", "type":"local", "score":9},
		{"name":"World.calcDistance", "caption":"World:calcDistance", "value":"World:calcDistance(pos1,pos2)", "meta":"World", "type":"local", "score":9},
		{"name":"World.despawnActor", "caption":"World:despawnActor", "value":"World:despawnActor(objid)", "meta":"World", "type":"local", "score":9},
		{"name":"World.despawnItemByBox", "caption":"World:despawnItemByBox", "value":"World:despawnItemByBox(x1, y1, z1, x2, y2, z2)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getActorsByBox", "caption":"World:getActorsByBox", "value":"World:getActorsByBox(objtype, x1, y1, z1, x2, y2, z2)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getAllPlayers", "caption":"World:getAllPlayers", "value":"World:getAllPlayers(alive)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getCameraEditState", "caption":"World:getCameraEditState", "value":"World:getCameraEditState(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getCustomCameraConfig", "caption":"World:getCustomCameraConfig", "value":"World:getCustomCameraConfig(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getHours", "caption":"World:getHours", "value":"World:getHours(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getPlayerTotal", "caption":"World:getPlayerTotal", "value":"World:getPlayerTotal(alive)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getRangeXZ", "caption":"World:getRangeXZ", "value":"World:getRangeXZ(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getRayBlock", "caption":"World:getRayBlock", "value":"World:getRayBlock(srcx, srcy, srcz, face, distance)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getRayLength", "caption":"World:getRayLength", "value":"World:getRayLength(srcx, srcy, srcz, dstx, dsty, dstz, distance)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isCreateRunMode", "caption":"World:isCreateRunMode", "value":"World:isCreateRunMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isCreativeMode", "caption":"World:isCreativeMode", "value":"World:isCreativeMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isCustomGame", "caption":"World:isCustomGame", "value":"World:isCustomGame(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isDaytime", "caption":"World:isDaytime", "value":"World:isDaytime(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isExtremityMode", "caption":"World:isExtremityMode", "value":"World:isExtremityMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isFreeMode", "caption":"World:isFreeMode", "value":"World:isFreeMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isGameMakerMode", "caption":"World:isGameMakerMode", "value":"World:isGameMakerMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isGameMakerRunMode", "caption":"World:isGameMakerRunMode", "value":"World:isGameMakerRunMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isGodMode", "caption":"World:isGodMode", "value":"World:isGodMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isSurviveMode", "caption":"World:isSurviveMode", "value":"World:isSurviveMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.playSoundEffectOnPos", "caption":"World:playSoundEffectOnPos", "value":"World:playSoundEffectOnPos(pos, soundId, volume, pitch, isLoop)", "meta":"World", "type":"local", "score":9},
		{"name":"World.randomOnePlayer", "caption":"World:randomOnePlayer", "value":"World:randomOnePlayer(alive)", "meta":"World", "type":"local", "score":9},
		{"name":"World.randomParticleEffectID", "caption":"World:randomParticleEffectID", "value":"World:randomParticleEffectID(x, y, z, particleId, scale)", "meta":"World", "type":"local", "score":9},
		{"name":"World.setCameraEditState", "caption":"World:setCameraEditState", "value":"World:setCameraEditState(state)", "meta":"World", "type":"local", "score":9},
		{"name":"World.setEffectScaleOnPosition", "caption":"World:setEffectScaleOnPosition", "value":"World:setEffectScaleOnPosition(x, y, z, particleId, scale)", "meta":"World", "type":"local", "score":9},
		{"name":"World.setHours", "caption":"World:setHours", "value":"World:setHours(hour)", "meta":"World", "type":"local", "score":9},
		{"name":"World.spawnItem", "caption":"World:spawnItem", "value":"World:spawnItem(x, y, z, itemid, num)", "meta":"World", "type":"local", "score":9},
		{"name":"World.spawnProjectile", "caption":"World:spawnProjectile", "value":"World:spawnProjectile(shooter, itemid, x, y, z, dstx, dsty, dstz, speed)", "meta":"World", "type":"local", "score":9},
		{"name":"World.stopEffectOnPosition", "caption":"World:stopEffectOnPosition", "value":"World:stopEffectOnPosition(x, y, z, particleId)", "meta":"World", "type":"local", "score":9},
		{"name":"World.stopSoundEffectOnPos", "caption":"World:stopSoundEffectOnPos", "value":"World:stopSoundEffectOnPos(pos, soundId)", "meta":"World", "type":"local", "score":9},
		{"name":"WorldContainer.addFurnace", "caption":"WorldContainer:addFurnace", "value":"WorldContainer:addFurnace(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.addItemToContainer", "caption":"WorldContainer:addItemToContainer", "value":"WorldContainer:addItemToContainer(x, y, z, itemid, num)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.addStorageBox", "caption":"WorldContainer:addStorageBox", "value":"WorldContainer:addStorageBox(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.addStorageItem", "caption":"WorldContainer:addStorageItem", "value":"WorldContainer:addStorageItem(x, y, z, itemid, num)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.checkFurnace", "caption":"WorldContainer:checkFurnace", "value":"WorldContainer:checkFurnace(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.checkStorage", "caption":"WorldContainer:checkStorage", "value":"WorldContainer:checkStorage(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.checkStorageEmptyGrid", "caption":"WorldContainer:checkStorageEmptyGrid", "value":"WorldContainer:checkStorageEmptyGrid(x, y, z, itemid)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.clearContainer", "caption":"WorldContainer:clearContainer", "value":"WorldContainer:clearContainer(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.clearStorageBox", "caption":"WorldContainer:clearStorageBox", "value":"WorldContainer:clearStorageBox(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.getFurnaceHeatPercent", "caption":"WorldContainer:getFurnaceHeatPercent", "value":"WorldContainer:getFurnaceHeatPercent(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.getFurnaceMeltPercent", "caption":"WorldContainer:getFurnaceMeltPercent", "value":"WorldContainer:getFurnaceMeltPercent(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.getStorageItem", "caption":"WorldContainer:getStorageItem", "value":"WorldContainer:getStorageItem(x, y, z, offset)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.removeContainerItemByID", "caption":"WorldContainer:removeContainerItemByID", "value":"WorldContainer:removeContainerItemByID(x, y, z, itemid, num)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.removeFurnace", "caption":"WorldContainer:removeFurnace", "value":"WorldContainer:removeFurnace(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.removeStorageBox", "caption":"WorldContainer:removeStorageBox", "value":"WorldContainer:removeStorageBox(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.removeStorageItemByID", "caption":"WorldContainer:removeStorageItemByID", "value":"WorldContainer:removeStorageItemByID(x, y, z, itemid, num)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.removeStorageItemByIndex", "caption":"WorldContainer:removeStorageItemByIndex", "value":"WorldContainer:removeStorageItemByIndex(x, y, z, offset, num)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.setStorageItem", "caption":"WorldContainer:setStorageItem", "value":"WorldContainer:setStorageItem(x, y, z, offset, itemid, num)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"Player.openUIView", "caption":"Player:openUIView", "value":"Player:openUIView(objid, uiname)", "meta":"Player", "type":"local", "score":9},
	]
	return jsonObj
}

function GetGlobalVars() {
	var jsonObj = [
		{"name":"ACTORBODY_EFFECT.BODYFX_ACCUMFIRE", "caption":"BODYFX_ACCUMFIRE", "value":"ACTORBODY_EFFECT.BODYFX_ACCUMFIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_AI_ANGRY", "caption":"BODYFX_AI_ANGRY", "value":"ACTORBODY_EFFECT.BODYFX_AI_ANGRY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_AI_HUNGRY", "caption":"BODYFX_AI_HUNGRY", "value":"ACTORBODY_EFFECT.BODYFX_AI_HUNGRY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_AI_NEEDREEDS", "caption":"BODYFX_AI_NEEDREEDS", "value":"ACTORBODY_EFFECT.BODYFX_AI_NEEDREEDS", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_AI_SLEEP", "caption":"BODYFX_AI_SLEEP", "value":"ACTORBODY_EFFECT.BODYFX_AI_SLEEP", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_BALL_CHARGE", "caption":"BODYFX_BALL_CHARGE", "value":"ACTORBODY_EFFECT.BODYFX_BALL_CHARGE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_BALL_SHOOT_RELEASE", "caption":"BODYFX_BALL_SHOOT_RELEASE", "value":"ACTORBODY_EFFECT.BODYFX_BALL_SHOOT_RELEASE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_CONCEAL", "caption":"BODYFX_CONCEAL", "value":"ACTORBODY_EFFECT.BODYFX_CONCEAL", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DANCE", "caption":"BODYFX_DANCE", "value":"ACTORBODY_EFFECT.BODYFX_DANCE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DEADPROTECT", "caption":"BODYFX_DEADPROTECT", "value":"ACTORBODY_EFFECT.BODYFX_DEADPROTECT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DISAPPEAR", "caption":"BODYFX_DISAPPEAR", "value":"ACTORBODY_EFFECT.BODYFX_DISAPPEAR", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DIZZY", "caption":"BODYFX_DIZZY", "value":"ACTORBODY_EFFECT.BODYFX_DIZZY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE0", "caption":"BODYFX_DRAGONDIE0", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE0", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE1", "caption":"BODYFX_DRAGONDIE1", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE1", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE2", "caption":"BODYFX_DRAGONDIE2", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE2", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DRAGONFIRE", "caption":"BODYFX_DRAGONFIRE", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONFIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DRAGONSUMMON", "caption":"BODYFX_DRAGONSUMMON", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONSUMMON", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_ENCH_FALL", "caption":"BODYFX_ENCH_FALL", "value":"ACTORBODY_EFFECT.BODYFX_ENCH_FALL", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_FEAR", "caption":"BODYFX_FEAR", "value":"ACTORBODY_EFFECT.BODYFX_FEAR", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_FIRE", "caption":"BODYFX_FIRE", "value":"ACTORBODY_EFFECT.BODYFX_FIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_FORBIDDEN", "caption":"BODYFX_FORBIDDEN", "value":"ACTORBODY_EFFECT.BODYFX_FORBIDDEN", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_HORSE_BENTENG", "caption":"BODYFX_HORSE_BENTENG", "value":"ACTORBODY_EFFECT.BODYFX_HORSE_BENTENG", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_HORSE_FLY", "caption":"BODYFX_HORSE_FLY", "value":"ACTORBODY_EFFECT.BODYFX_HORSE_FLY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_HURT", "caption":"BODYFX_HURT", "value":"ACTORBODY_EFFECT.BODYFX_HURT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_INTERACTION", "caption":"BODYFX_INTERACTION", "value":"ACTORBODY_EFFECT.BODYFX_INTERACTION", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_MAKETROUBLE", "caption":"BODYFX_MAKETROUBLE", "value":"ACTORBODY_EFFECT.BODYFX_MAKETROUBLE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_MILKING", "caption":"BODYFX_MILKING", "value":"ACTORBODY_EFFECT.BODYFX_MILKING", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_PORTAL", "caption":"BODYFX_PORTAL", "value":"ACTORBODY_EFFECT.BODYFX_PORTAL", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_ROLECOLLECT", "caption":"BODYFX_ROLECOLLECT", "value":"ACTORBODY_EFFECT.BODYFX_ROLECOLLECT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_ROLEJUMP", "caption":"BODYFX_ROLEJUMP", "value":"ACTORBODY_EFFECT.BODYFX_ROLEJUMP", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TAME_FAILED", "caption":"BODYFX_TAME_FAILED", "value":"ACTORBODY_EFFECT.BODYFX_TAME_FAILED", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TAME_FOOD", "caption":"BODYFX_TAME_FOOD", "value":"ACTORBODY_EFFECT.BODYFX_TAME_FOOD", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TAME_NOFOOD", "caption":"BODYFX_TAME_NOFOOD", "value":"ACTORBODY_EFFECT.BODYFX_TAME_NOFOOD", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TAME_SUCCEED", "caption":"BODYFX_TAME_SUCCEED", "value":"ACTORBODY_EFFECT.BODYFX_TAME_SUCCEED", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TRAINMOVE", "caption":"BODYFX_TRAINMOVE", "value":"ACTORBODY_EFFECT.BODYFX_TRAINMOVE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TRANSPORT", "caption":"BODYFX_TRANSPORT", "value":"ACTORBODY_EFFECT.BODYFX_TRANSPORT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_WEAPON_FIRE", "caption":"BODYFX_WEAPON_FIRE", "value":"ACTORBODY_EFFECT.BODYFX_WEAPON_FIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.HUDFX_HEADSHOT", "caption":"HUDFX_HEADSHOT", "value":"ACTORBODY_EFFECT.HUDFX_HEADSHOT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.HUDFX_NORMALSHOT", "caption":"HUDFX_NORMALSHOT", "value":"ACTORBODY_EFFECT.HUDFX_NORMALSHOT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.TOOLFX_JETPACK2", "caption":"TOOLFX_JETPACK2", "value":"ACTORBODY_EFFECT.TOOLFX_JETPACK2", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"BACKPACK_TYPE.EQUIP", "caption":"EQUIP", "value":"BACKPACK_TYPE.EQUIP", "meta":"BACKPACK_TYPE", "type":"local", "score":6},
		{"name":"BACKPACK_TYPE.INVENTORY", "caption":"INVENTORY", "value":"BACKPACK_TYPE.INVENTORY", "meta":"BACKPACK_TYPE", "type":"local", "score":6},
		{"name":"BACKPACK_TYPE.SHORTCUT", "caption":"SHORTCUT", "value":"BACKPACK_TYPE.SHORTCUT", "meta":"BACKPACK_TYPE", "type":"local", "score":6},
		{"name":"BLOCKATTR.BURNING_PROBABILITY", "caption":"BURNING_PROBABILITY", "value":"BLOCKATTR.BURNING_PROBABILITY", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR.BURNING_SPEED", "caption":"BURNING_SPEED", "value":"BLOCKATTR.BURNING_SPEED", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR.EXPLODE_RESISTANCE", "caption":"EXPLODE_RESISTANCE", "value":"BLOCKATTR.EXPLODE_RESISTANCE", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR.GLISSADE", "caption":"GLISSADE", "value":"BLOCKATTR.GLISSADE", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR.HARDNESS", "caption":"HARDNESS", "value":"BLOCKATTR.HARDNESS", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR.LIGHTNESS", "caption":"LIGHTNESS", "value":"BLOCKATTR.LIGHTNESS", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR_ENABLE.BEPUSHED_DROPITEM", "caption":"BEPUSHED_DROPITEM", "value":"BLOCKATTR_ENABLE.BEPUSHED_DROPITEM", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
		{"name":"BLOCKATTR_ENABLE.ENABLE_BEOPERATED", "caption":"ENABLE_BEOPERATED", "value":"BLOCKATTR_ENABLE.ENABLE_BEOPERATED", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
		{"name":"BLOCKATTR_ENABLE.ENABLE_BEPUSHED", "caption":"ENABLE_BEPUSHED", "value":"BLOCKATTR_ENABLE.ENABLE_BEPUSHED", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
		{"name":"BLOCKATTR_ENABLE.ENABLE_DESTROYED", "caption":"ENABLE_DESTROYED", "value":"BLOCKATTR_ENABLE.ENABLE_DESTROYED", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
		{"name":"BLOCKATTR_ENABLE.ENABLE_DROPITEM", "caption":"ENABLE_DROPITEM", "value":"BLOCKATTR_ENABLE.ENABLE_DROPITEM", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
		{"name":"BLOCKID.AIR", "caption":"AIR", "value":"BLOCKID.AIR", "meta":"BLOCKID", "type":"local", "score":6},
		{"name":"BLOCKSTATUS.ACTIVE", "caption":"ACTIVE", "value":"BLOCKSTATUS.ACTIVE", "meta":"BLOCKSTATUS", "type":"local", "score":6},
		{"name":"BLOCKSTATUS.INACTIVE", "caption":"INACTIVE", "value":"BLOCKSTATUS.INACTIVE", "meta":"BLOCKSTATUS", "type":"local", "score":6},
		{"name":"BPACK_SINDEX.BACKPACK_START_INDEX", "caption":"BACKPACK_START_INDEX", "value":"BPACK_SINDEX.BACKPACK_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
		{"name":"BPACK_SINDEX.EQUIP_START_INDEX", "caption":"EQUIP_START_INDEX", "value":"BPACK_SINDEX.EQUIP_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
		{"name":"BPACK_SINDEX.SHORTCUT_START_INDEX", "caption":"SHORTCUT_START_INDEX", "value":"BPACK_SINDEX.SHORTCUT_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
		{"name":"BPACK_SINDEX.STORAGE_START_INDEX", "caption":"STORAGE_START_INDEX", "value":"BPACK_SINDEX.STORAGE_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
		{"name":"CREATUREATTR.ATK_MELEE", "caption":"ATK_MELEE", "value":"CREATUREATTR.ATK_MELEE", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.ATK_REMOTE", "caption":"ATK_REMOTE", "value":"CREATUREATTR.ATK_REMOTE", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.CUR_HP", "caption":"CUR_HP", "value":"CREATUREATTR.CUR_HP", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.CUR_HUNGER", "caption":"CUR_HUNGER", "value":"CREATUREATTR.CUR_HUNGER", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.CUR_OXYGEN", "caption":"CUR_OXYGEN", "value":"CREATUREATTR.CUR_OXYGEN", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.DEF_MELEE", "caption":"DEF_MELEE", "value":"CREATUREATTR.DEF_MELEE", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.DEF_REMOTE", "caption":"DEF_REMOTE", "value":"CREATUREATTR.DEF_REMOTE", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.DIMENSION", "caption":"DIMENSION", "value":"CREATUREATTR.DIMENSION", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.DODGE", "caption":"DODGE", "value":"CREATUREATTR.DODGE", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.HP_RECOVER", "caption":"HP_RECOVER", "value":"CREATUREATTR.HP_RECOVER", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.JUMP_POWER", "caption":"JUMP_POWER", "value":"CREATUREATTR.JUMP_POWER", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.MAX_HP", "caption":"MAX_HP", "value":"CREATUREATTR.MAX_HP", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.MAX_HUNGER", "caption":"MAX_HUNGER", "value":"CREATUREATTR.MAX_HUNGER", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.MAX_OXYGEN", "caption":"MAX_OXYGEN", "value":"CREATUREATTR.MAX_OXYGEN", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.RECOVER_OXYGEN", "caption":"RECOVER_OXYGEN", "value":"CREATUREATTR.RECOVER_OXYGEN", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.RUN_SPEED", "caption":"RUN_SPEED", "value":"CREATUREATTR.RUN_SPEED", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.SWIN_SPEED", "caption":"SWIN_SPEED", "value":"CREATUREATTR.SWIN_SPEED", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.WALK_SPEED", "caption":"WALK_SPEED", "value":"CREATUREATTR.WALK_SPEED", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.WEIGHT", "caption":"WEIGHT", "value":"CREATUREATTR.WEIGHT", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_ATTACK", "caption":"ENABLE_ATTACK", "value":"CREATUREATTR_ENABLE.ENABLE_ATTACK", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_BEATTACKED", "caption":"ENABLE_BEATTACKED", "value":"CREATUREATTR_ENABLE.ENABLE_BEATTACKED", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_BEKILLED", "caption":"ENABLE_BEKILLED", "value":"CREATUREATTR_ENABLE.ENABLE_BEKILLED", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_DEATHDROPITEM", "caption":"ENABLE_DEATHDROPITEM", "value":"CREATUREATTR_ENABLE.ENABLE_DEATHDROPITEM", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_MOVE", "caption":"ENABLE_MOVE", "value":"CREATUREATTR_ENABLE.ENABLE_MOVE", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_PICKUP", "caption":"ENABLE_PICKUP", "value":"CREATUREATTR_ENABLE.ENABLE_PICKUP", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREMOTION.ATK_MELEE", "caption":"ATK_MELEE", "value":"CREATUREMOTION.ATK_MELEE", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.ATK_REMOTE", "caption":"ATK_REMOTE", "value":"CREATUREMOTION.ATK_REMOTE", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.BEATTRACTED", "caption":"BEATTRACTED", "value":"CREATUREMOTION.BEATTRACTED", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.COPULATION", "caption":"COPULATION", "value":"CREATUREMOTION.COPULATION", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.FOLLOW", "caption":"FOLLOW", "value":"CREATUREMOTION.FOLLOW", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.IDLE", "caption":"IDLE", "value":"CREATUREMOTION.IDLE", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.RUN_AWAY", "caption":"RUN_AWAY", "value":"CREATUREMOTION.RUN_AWAY", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.SELF_BOMB", "caption":"SELF_BOMB", "value":"CREATUREMOTION.SELF_BOMB", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.STANDBY", "caption":"STANDBY", "value":"CREATUREMOTION.STANDBY", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.STROLL", "caption":"STROLL", "value":"CREATUREMOTION.STROLL", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.SWIM", "caption":"SWIM", "value":"CREATUREMOTION.SWIM", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CameraEditState.CAMERA_EDIT_STATE_EDIT", "caption":"CAMERA_EDIT_STATE_EDIT", "value":"CameraEditState.CAMERA_EDIT_STATE_EDIT", "meta":"CameraEditState", "type":"local", "score":6},
		{"name":"CameraEditState.CAMERA_EDIT_STATE_NULL", "caption":"CAMERA_EDIT_STATE_NULL", "value":"CameraEditState.CAMERA_EDIT_STATE_NULL", "meta":"CameraEditState", "type":"local", "score":6},
		{"name":"CameraEditState.CAMERA_EDIT_STATE_TEST", "caption":"CAMERA_EDIT_STATE_TEST", "value":"CameraEditState.CAMERA_EDIT_STATE_TEST", "meta":"CameraEditState", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_BREAST", "caption":"EQUIP_BREAST", "value":"EQUIP_SLOT_TYPE.EQUIP_BREAST", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_HEAD", "caption":"EQUIP_HEAD", "value":"EQUIP_SLOT_TYPE.EQUIP_HEAD", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_LEGGING", "caption":"EQUIP_LEGGING", "value":"EQUIP_SLOT_TYPE.EQUIP_LEGGING", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_PIFENG", "caption":"EQUIP_PIFENG", "value":"EQUIP_SLOT_TYPE.EQUIP_PIFENG", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_SHOE", "caption":"EQUIP_SHOE", "value":"EQUIP_SLOT_TYPE.EQUIP_SHOE", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_WEAPON", "caption":"EQUIP_WEAPON", "value":"EQUIP_SLOT_TYPE.EQUIP_WEAPON", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.MAX_EQUIP_SLOTS", "caption":"MAX_EQUIP_SLOTS", "value":"EQUIP_SLOT_TYPE.MAX_EQUIP_SLOTS", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"ErrorCode.FAILED", "caption":"FAILED", "value":"ErrorCode.FAILED", "meta":"ErrorCode", "type":"local", "score":6},
		{"name":"ErrorCode.OK", "caption":"OK", "value":"ErrorCode.OK", "meta":"ErrorCode", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_NEG_X", "caption":"DIR_NEG_X", "value":"FACE_DIRECTION.DIR_NEG_X", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_NEG_Y", "caption":"DIR_NEG_Y", "value":"FACE_DIRECTION.DIR_NEG_Y", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_NEG_Z", "caption":"DIR_NEG_Z", "value":"FACE_DIRECTION.DIR_NEG_Z", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_NOT_INIT", "caption":"DIR_NOT_INIT", "value":"FACE_DIRECTION.DIR_NOT_INIT", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_POS_X", "caption":"DIR_POS_X", "value":"FACE_DIRECTION.DIR_POS_X", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_POS_Y", "caption":"DIR_POS_Y", "value":"FACE_DIRECTION.DIR_POS_Y", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_POS_Z", "caption":"DIR_POS_Z", "value":"FACE_DIRECTION.DIR_POS_Z", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"GSOUND_TYPE.GSOUND_DESTROY", "caption":"GSOUND_DESTROY", "value":"GSOUND_TYPE.GSOUND_DESTROY", "meta":"GSOUND_TYPE", "type":"local", "score":6},
		{"name":"GSOUND_TYPE.GSOUND_DIG", "caption":"GSOUND_DIG", "value":"GSOUND_TYPE.GSOUND_DIG", "meta":"GSOUND_TYPE", "type":"local", "score":6},
		{"name":"GSOUND_TYPE.GSOUND_FALLGROUND", "caption":"GSOUND_FALLGROUND", "value":"GSOUND_TYPE.GSOUND_FALLGROUND", "meta":"GSOUND_TYPE", "type":"local", "score":6},
		{"name":"GSOUND_TYPE.GSOUND_PLACE", "caption":"GSOUND_PLACE", "value":"GSOUND_TYPE.GSOUND_PLACE", "meta":"GSOUND_TYPE", "type":"local", "score":6},
		{"name":"GSOUND_TYPE.GSOUND_WALK", "caption":"GSOUND_WALK", "value":"GSOUND_TYPE.GSOUND_WALK", "meta":"GSOUND_TYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.ANTIINJURY", "caption":"ANTIINJURY", "value":"HURTTYPE.ANTIINJURY", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.ANVIL", "caption":"ANVIL", "value":"HURTTYPE.ANVIL", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.ASPHYXIA", "caption":"ASPHYXIA", "value":"HURTTYPE.ASPHYXIA", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.BOMB", "caption":"BOMB", "value":"HURTTYPE.BOMB", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.BURNING", "caption":"BURNING", "value":"HURTTYPE.BURNING", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.CACTUS", "caption":"CACTUS", "value":"HURTTYPE.CACTUS", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.DROWN", "caption":"DROWN", "value":"HURTTYPE.DROWN", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.FALL", "caption":"FALL", "value":"HURTTYPE.FALL", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.LASER", "caption":"LASER", "value":"HURTTYPE.LASER", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.MAGIC", "caption":"MAGIC", "value":"HURTTYPE.MAGIC", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.MELEE", "caption":"MELEE", "value":"HURTTYPE.MELEE", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.PHYSICS", "caption":"PHYSICS", "value":"HURTTYPE.PHYSICS", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.REMOTE", "caption":"REMOTE", "value":"HURTTYPE.REMOTE", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.SUFFOCATE", "caption":"SUFFOCATE", "value":"HURTTYPE.SUFFOCATE", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.SUN", "caption":"SUN", "value":"HURTTYPE.SUN", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.TOXIN", "caption":"TOXIN", "value":"HURTTYPE.TOXIN", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.WITHER", "caption":"WITHER", "value":"HURTTYPE.WITHER", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"MAPMARK_TYPE.MMARK_CIRCLE", "caption":"MMARK_CIRCLE", "value":"MAPMARK_TYPE.MMARK_CIRCLE", "meta":"MAPMARK_TYPE", "type":"local", "score":6},
		{"name":"MAPMARK_TYPE.MMARK_LINE", "caption":"MMARK_LINE", "value":"MAPMARK_TYPE.MMARK_LINE", "meta":"MAPMARK_TYPE", "type":"local", "score":6},
		{"name":"MAPMARK_TYPE.MMARK_RECTANGLE", "caption":"MMARK_RECTANGLE", "value":"MAPMARK_TYPE.MMARK_RECTANGLE", "meta":"MAPMARK_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MAX_MOB_MODATTR", "caption":"MAX_MOB_MODATTR", "value":"MODATTRIB_TYPE.MAX_MOB_MODATTR", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MAX_MOD_ATTRIB", "caption":"MAX_MOD_ATTRIB", "value":"MODATTRIB_TYPE.MAX_MOD_ATTRIB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MAX_PLAYER_MODATTR", "caption":"MAX_PLAYER_MODATTR", "value":"MODATTRIB_TYPE.MAX_PLAYER_MODATTR", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ACTOR_SCALE", "caption":"MODATTR_ACTOR_SCALE", "value":"MODATTRIB_TYPE.MODATTR_ACTOR_SCALE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ARMOR_EXPLODE", "caption":"MODATTR_ARMOR_EXPLODE", "value":"MODATTRIB_TYPE.MODATTR_ARMOR_EXPLODE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ARMOR_PUNCH", "caption":"MODATTR_ARMOR_PUNCH", "value":"MODATTRIB_TYPE.MODATTR_ARMOR_PUNCH", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ARMOR_RANGE", "caption":"MODATTR_ARMOR_RANGE", "value":"MODATTRIB_TYPE.MODATTR_ARMOR_RANGE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_ANIMAL", "caption":"MODATTR_ATTACK_ANIMAL", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_ANIMAL", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_EXPLODE", "caption":"MODATTR_ATTACK_EXPLODE", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_EXPLODE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_FIRE", "caption":"MODATTR_ATTACK_FIRE", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_FIRE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_PLAYER", "caption":"MODATTR_ATTACK_PLAYER", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_PLAYER", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_POISON", "caption":"MODATTR_ATTACK_POISON", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_POISON", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_PUNCH", "caption":"MODATTR_ATTACK_PUNCH", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_PUNCH", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_RANGE", "caption":"MODATTR_ATTACK_RANGE", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_RANGE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_UNDEAD", "caption":"MODATTR_ATTACK_UNDEAD", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_UNDEAD", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_WITHER", "caption":"MODATTR_ATTACK_WITHER", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_WITHER", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_CRITICAL_HIT", "caption":"MODATTR_CRITICAL_HIT", "value":"MODATTRIB_TYPE.MODATTR_CRITICAL_HIT", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_EXPLODE", "caption":"MODATTR_DAMAGED_EXPLODE", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_EXPLODE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_FALLING", "caption":"MODATTR_DAMAGED_FALLING", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_FALLING", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_FIRE", "caption":"MODATTR_DAMAGED_FIRE", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_FIRE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_POISON", "caption":"MODATTR_DAMAGED_POISON", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_POISON", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_PUNCH", "caption":"MODATTR_DAMAGED_PUNCH", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_PUNCH", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_RANGE", "caption":"MODATTR_DAMAGED_RANGE", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_RANGE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_WITHER", "caption":"MODATTR_DAMAGED_WITHER", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_WITHER", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGE_ABSORB", "caption":"MODATTR_DAMAGE_ABSORB", "value":"MODATTRIB_TYPE.MODATTR_DAMAGE_ABSORB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DIG_SPEED", "caption":"MODATTR_DIG_SPEED", "value":"MODATTRIB_TYPE.MODATTR_DIG_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_JUMP_SPEED", "caption":"MODATTR_JUMP_SPEED", "value":"MODATTRIB_TYPE.MODATTR_JUMP_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_KNOCK", "caption":"MODATTR_KNOCK", "value":"MODATTRIB_TYPE.MODATTR_KNOCK", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST", "caption":"MODATTR_KNOCK_RESIST", "value":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST_PROB", "caption":"MODATTR_KNOCK_RESIST_PROB", "value":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST_PROB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_LUCK_DIG", "caption":"MODATTR_LUCK_DIG", "value":"MODATTRIB_TYPE.MODATTR_LUCK_DIG", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_LUCK_KILLMOB", "caption":"MODATTR_LUCK_KILLMOB", "value":"MODATTRIB_TYPE.MODATTR_LUCK_KILLMOB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_MOVE_SPEED", "caption":"MODATTR_MOVE_SPEED", "value":"MODATTRIB_TYPE.MODATTR_MOVE_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_OXYGEN_SUPPLY", "caption":"MODATTR_OXYGEN_SUPPLY", "value":"MODATTRIB_TYPE.MODATTR_OXYGEN_SUPPLY", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_SWIM_SPEED", "caption":"MODATTR_SWIM_SPEED", "value":"MODATTRIB_TYPE.MODATTR_SWIM_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_VIEW_BRIGHT", "caption":"MODATTR_VIEW_BRIGHT", "value":"MODATTRIB_TYPE.MODATTR_VIEW_BRIGHT", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"OBJ_TYPE.OBJTYPE_CREATURE", "caption":"OBJTYPE_CREATURE", "value":"OBJ_TYPE.OBJTYPE_CREATURE", "meta":"OBJ_TYPE", "type":"local", "score":6},
		{"name":"OBJ_TYPE.OBJTYPE_DROPITEM", "caption":"OBJTYPE_DROPITEM", "value":"OBJ_TYPE.OBJTYPE_DROPITEM", "meta":"OBJ_TYPE", "type":"local", "score":6},
		{"name":"OBJ_TYPE.OBJTYPE_MISSILE", "caption":"OBJTYPE_MISSILE", "value":"OBJ_TYPE.OBJTYPE_MISSILE", "meta":"OBJ_TYPE", "type":"local", "score":6},
		{"name":"OBJ_TYPE.OBJTYPE_PLAYER", "caption":"OBJTYPE_PLAYER", "value":"OBJ_TYPE.OBJTYPE_PLAYER", "meta":"OBJ_TYPE", "type":"local", "score":6},
		{"name":"PLAYERATTR.ATK_MELEE", "caption":"ATK_MELEE", "value":"PLAYERATTR.ATK_MELEE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.ATK_REMOTE", "caption":"ATK_REMOTE", "value":"PLAYERATTR.ATK_REMOTE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.CUR_HP", "caption":"CUR_HP", "value":"PLAYERATTR.CUR_HP", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.CUR_HUNGER", "caption":"CUR_HUNGER", "value":"PLAYERATTR.CUR_HUNGER", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.CUR_OXYGEN", "caption":"CUR_OXYGEN", "value":"PLAYERATTR.CUR_OXYGEN", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.DEF_MELEE", "caption":"DEF_MELEE", "value":"PLAYERATTR.DEF_MELEE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.DEF_REMOTE", "caption":"DEF_REMOTE", "value":"PLAYERATTR.DEF_REMOTE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.DIMENSION", "caption":"DIMENSION", "value":"PLAYERATTR.DIMENSION", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.DODGE", "caption":"DODGE", "value":"PLAYERATTR.DODGE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.HP_RECOVER", "caption":"HP_RECOVER", "value":"PLAYERATTR.HP_RECOVER", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.JUMP_POWER", "caption":"JUMP_POWER", "value":"PLAYERATTR.JUMP_POWER", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.LEVEL", "caption":"LEVEL", "value":"PLAYERATTR.LEVEL", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.LIFE_NUM", "caption":"LIFE_NUM", "value":"PLAYERATTR.LIFE_NUM", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.MAX_HP", "caption":"MAX_HP", "value":"PLAYERATTR.MAX_HP", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.MAX_HUNGER", "caption":"MAX_HUNGER", "value":"PLAYERATTR.MAX_HUNGER", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.MAX_OXYGEN", "caption":"MAX_OXYGEN", "value":"PLAYERATTR.MAX_OXYGEN", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.RECOVER_OXYGEN", "caption":"RECOVER_OXYGEN", "value":"PLAYERATTR.RECOVER_OXYGEN", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.RUN_SPEED", "caption":"RUN_SPEED", "value":"PLAYERATTR.RUN_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.SCORE", "caption":"SCORE", "value":"PLAYERATTR.SCORE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.SNEAK_SPEED", "caption":"SNEAK_SPEED", "value":"PLAYERATTR.SNEAK_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.SWIN_SPEED", "caption":"SWIN_SPEED", "value":"PLAYERATTR.SWIN_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.WALK_SPEED", "caption":"WALK_SPEED", "value":"PLAYERATTR.WALK_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_ATTACK", "caption":"ENABLE_ATTACK", "value":"PLAYERATTR_ENABLE.ENABLE_ATTACK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_BEATTACKED", "caption":"ENABLE_BEATTACKED", "value":"PLAYERATTR_ENABLE.ENABLE_BEATTACKED", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_BEKILLED", "caption":"ENABLE_BEKILLED", "value":"PLAYERATTR_ENABLE.ENABLE_BEKILLED", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_DEATHDROPITEM", "caption":"ENABLE_DEATHDROPITEM", "value":"PLAYERATTR_ENABLE.ENABLE_DEATHDROPITEM", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_DESTROYBLOCK", "caption":"ENABLE_DESTROYBLOCK", "value":"PLAYERATTR_ENABLE.ENABLE_DESTROYBLOCK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_DISCARDITEM", "caption":"ENABLE_DISCARDITEM", "value":"PLAYERATTR_ENABLE.ENABLE_DISCARDITEM", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_MOVE", "caption":"ENABLE_MOVE", "value":"PLAYERATTR_ENABLE.ENABLE_MOVE", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_OPERATEBLOCK", "caption":"ENABLE_OPERATEBLOCK", "value":"PLAYERATTR_ENABLE.ENABLE_OPERATEBLOCK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_PICKUP", "caption":"ENABLE_PICKUP", "value":"PLAYERATTR_ENABLE.ENABLE_PICKUP", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_PLACEBLOCK", "caption":"ENABLE_PLACEBLOCK", "value":"PLAYERATTR_ENABLE.ENABLE_PLACEBLOCK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_USEITEM", "caption":"ENABLE_USEITEM", "value":"PLAYERATTR_ENABLE.ENABLE_USEITEM", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_VEHICLEAUTOFORWARD", "caption":"ENABLE_VEHICLEAUTOFORWARD", "value":"PLAYERATTR_ENABLE.ENABLE_VEHICLEAUTOFORWARD", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ITEM.ITEM_DISABLE_DROP", "caption":"ITEM_DISABLE_DROP", "value":"PLAYERATTR_ITEM.ITEM_DISABLE_DROP", "meta":"PLAYERATTR_ITEM", "type":"local", "score":6},
		{"name":"PLAYERATTR_ITEM.ITEM_DISABLE_THROW", "caption":"ITEM_DISABLE_THROW", "value":"PLAYERATTR_ITEM.ITEM_DISABLE_THROW", "meta":"PLAYERATTR_ITEM", "type":"local", "score":6},
		{"name":"PLAYERMOTION.DOWN", "caption":"DOWN", "value":"PLAYERMOTION.DOWN", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.FALL", "caption":"FALL", "value":"PLAYERMOTION.FALL", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.FALL_GROUND", "caption":"FALL_GROUND", "value":"PLAYERMOTION.FALL_GROUND", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.JUMP", "caption":"JUMP", "value":"PLAYERMOTION.JUMP", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.JUMP_TWICE", "caption":"JUMP_TWICE", "value":"PLAYERMOTION.JUMP_TWICE", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.RUN", "caption":"RUN", "value":"PLAYERMOTION.RUN", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.SNEAK", "caption":"SNEAK", "value":"PLAYERMOTION.SNEAK", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.STATIC", "caption":"STATIC", "value":"PLAYERMOTION.STATIC", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.TURNBACK", "caption":"TURNBACK", "value":"PLAYERMOTION.TURNBACK", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.UP", "caption":"UP", "value":"PLAYERMOTION.UP", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.WALK", "caption":"WALK", "value":"PLAYERMOTION.WALK", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"RESLIBTYPE.BLOCK", "caption":"BLOCK", "value":"RESLIBTYPE.BLOCK", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"RESLIBTYPE.ITEM", "caption":"ITEM", "value":"RESLIBTYPE.ITEM", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"RESLIBTYPE.MONSTER", "caption":"MONSTER", "value":"RESLIBTYPE.MONSTER", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"RESLIBTYPE.NONE", "caption":"NONE", "value":"RESLIBTYPE.NONE", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"RESLIBTYPE.PARTICLE", "caption":"PARTICLE", "value":"RESLIBTYPE.PARTICLE", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"RESLIBTYPE.SOUND", "caption":"SOUND", "value":"RESLIBTYPE.SOUND", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"TEAMATTR.PLAYER_NUM", "caption":"PLAYER_NUM", "value":"TEAMATTR.PLAYER_NUM", "meta":"TEAMATTR", "type":"local", "score":6},
		{"name":"TEAMATTR.SCORE", "caption":"SCORE", "value":"TEAMATTR.SCORE", "meta":"TEAMATTR", "type":"local", "score":6},
		{"name":"TEAM_RESULTS.TEAM_RESULTS_DOGFALL", "caption":"TEAM_RESULTS_DOGFALL", "value":"TEAM_RESULTS.TEAM_RESULTS_DOGFALL", "meta":"TEAM_RESULTS", "type":"local", "score":6},
		{"name":"TEAM_RESULTS.TEAM_RESULTS_LOSE", "caption":"TEAM_RESULTS_LOSE", "value":"TEAM_RESULTS.TEAM_RESULTS_LOSE", "meta":"TEAM_RESULTS", "type":"local", "score":6},
		{"name":"TEAM_RESULTS.TEAM_RESULTS_NONE", "caption":"TEAM_RESULTS_NONE", "value":"TEAM_RESULTS.TEAM_RESULTS_NONE", "meta":"TEAM_RESULTS", "type":"local", "score":6},
		{"name":"TEAM_RESULTS.TEAM_RESULTS_WIN", "caption":"TEAM_RESULTS_WIN", "value":"TEAM_RESULTS.TEAM_RESULTS_WIN", "meta":"TEAM_RESULTS", "type":"local", "score":6},
		{"name":"TerrainType.TERRAIN_FLAT", "caption":"TERRAIN_FLAT", "value":"TerrainType.TERRAIN_FLAT", "meta":"TerrainType", "type":"local", "score":6},
		{"name":"TerrainType.TERRAIN_NORMAL", "caption":"TERRAIN_NORMAL", "value":"TerrainType.TERRAIN_NORMAL", "meta":"TerrainType", "type":"local", "score":6},
		{"name":"VIEWPORTTYPE.BACKVIEW", "caption":"BACKVIEW", "value":"VIEWPORTTYPE.BACKVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
		{"name":"VIEWPORTTYPE.CUSTOMVIEW", "caption":"CUSTOMVIEW", "value":"VIEWPORTTYPE.CUSTOMVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
		{"name":"VIEWPORTTYPE.FRONTVIEW", "caption":"FRONTVIEW", "value":"VIEWPORTTYPE.FRONTVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
		{"name":"VIEWPORTTYPE.MAINVIEW", "caption":"MAINVIEW", "value":"VIEWPORTTYPE.MAINVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
		{"name":"VIEWPORTTYPE.TOPVIEW", "caption":"TOPVIEW", "value":"VIEWPORTTYPE.TOPVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
		{"name":"WEATHERSTATUS.RAIN", "caption":"RAIN", "value":"WEATHERSTATUS.RAIN", "meta":"WEATHERSTATUS", "type":"local", "score":6},
		{"name":"WEATHERSTATUS.SHINE", "caption":"SHINE", "value":"WEATHERSTATUS.SHINE", "meta":"WEATHERSTATUS", "type":"local", "score":6},
		{"name":"WEATHERSTATUS.SHINE_AND_RAIN", "caption":"SHINE_AND_RAIN", "value":"WEATHERSTATUS.SHINE_AND_RAIN", "meta":"WEATHERSTATUS", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_CREATE", "caption":"OWTYPE_CREATE", "value":"WorldType.OWTYPE_CREATE", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_CREATE_RUNGAME", "caption":"OWTYPE_CREATE_RUNGAME", "value":"WorldType.OWTYPE_CREATE_RUNGAME", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_EXTREMITY", "caption":"OWTYPE_EXTREMITY", "value":"WorldType.OWTYPE_EXTREMITY", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_FREEMODE", "caption":"OWTYPE_FREEMODE", "value":"WorldType.OWTYPE_FREEMODE", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_GAMEMAKER", "caption":"OWTYPE_GAMEMAKER", "value":"WorldType.OWTYPE_GAMEMAKER", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_GAMEMAKER_RUN", "caption":"OWTYPE_GAMEMAKER_RUN", "value":"WorldType.OWTYPE_GAMEMAKER_RUN", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_RECORD", "caption":"OWTYPE_RECORD", "value":"WorldType.OWTYPE_RECORD", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_SINGLE", "caption":"OWTYPE_SINGLE", "value":"WorldType.OWTYPE_SINGLE", "meta":"WorldType", "type":"local", "score":6},
	]
	return jsonObj
}
