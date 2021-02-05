var lang = 'sc' //I18N
var data_lst_keys = 
[
	'TrunkSkillData',
	'EquipPilotData',
	'EquipLegData',
	'GirlData',
	'GirlSkinData',
	'GirlStarData',
	'GirllevelData',
	'ItemData',
	'MachineArmorData',
	'MCVGirlSkillData',
	'MCVNatureData',
	'MCVNatureIdData',
	'MCVNatureUnlockSkillData',
	'SkillArrayData',
	'SuitData',
	'TalentSpecialData',
	'LanguageData',
	'PropertyData',
	'WidgetData'
]
var fg_data = {}
async function load_basic_data(file_name)
{
	await axios.get('fg_data/' + lang + '/' + file_name + '.json').then((resp) =>
	{
		fg_data[file_name] = resp.data
	})
}
async function init_data()
{
	if (localStorage.hasOwnProperty('lang'))
		lang = localStorage.getItem('lang')
	else
		localStorage.setItem('lang', 'sc')
	await axios.all(data_lst_keys.map(load_basic_data)).then(axios.spread((...a) =>
	{
		Vue.set(app.$data, 'loaded', true)
	}))
}
function handle_select_url(key, key_path)
{
	if (key == app.$data.now_index)
		return
	switch (key)
	{
		case 'mainpage':
			window.location = './index.html'
			break
		case 'pilot':
			window.location = './pilot.html'
			break
	}
}

var equip_sub_type = 
[
	"壁垒武器",
	"片手武器",
	"突击武器",
	"强袭武器",
	"机枪武器",
	"冲锋武器",
	"狙击武器",
	"火炮武器",
	"投射武器",
	"轻型输出胸甲",
	"中型输出胸甲",
	"重型输出胸甲",
	"中型生存胸甲",
	"重型生存胸甲",
	"轻型输出腿甲",
	"中型输出腿甲",
	"重型输出腿甲",
	"中型生存腿甲",
	"重型生存腿甲",
	"轻型输出挂载",
	"中型输出挂载",
	"重型输出挂载",
	"中型生存挂载",
	"重型生存挂载",
	"生存配件",
	"输出配件",
	"无",
	"特殊配件"
]

var profession_type =
[
	"守护",
	"格斗",
	"射击",
	"爆破",
	"狙击",
	"轰炸"
]

var camp =
[
	"Blacark",
	"Paranoid",
	"HHED",
	"Haxel",
	"Arita",
	"Kegha",
	"NoGenera",
	"NERV"
]

var kindness_gift = 
[
	"无",
	"宝石",
	"书籍",
	"武器",
	"服饰",
	"食物",
	"玩具",
	"通用"
]

var hit_grade = 
[
	0,
	140,
	190,
	240,
	290,
	340
]