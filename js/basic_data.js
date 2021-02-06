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
	"장벽 무기",
	"한손 무기",
	"돌격 무기",
	"강습 무기",
	"기관총 무기",
	"돌진 무기",
	"저격 무기",
	"화포 무기",
	"발사 무기",
	"경량 출력 체스트아머",
	"표준형 출력 체스트아머",
	"고중량 출력 체스트아머",
	"표준형 생존 체스트아머",
	"고중량 생존 체스트아머",
	"경량 출력 레그아머",
	"표준형 출력 레그아머",
	"고중량 출력 레그아머",
	"표준형 생존 레그아머",
	"고중량 생존 레그아머",
	"경량 출력 백플레이트",
	"표준형 출력 백플레이트",
	"고중량 출력 백플레이트",
	"표준형 생존 백플레이트",
	"고중량 생존 백플레이트",
	"생존부품",
	"출력부품",
	"없음",
	"특수부품"
]

var profession_type =
[
	"수호",
	"전투",
	"사격",
	"폭파",
	"저격",
	"폭격"
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
	"없음",
	"보석",
	"서적",
	"무기",
	"의상",
	"음식",
	"장난감",
	"일반"
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