<template>
  <div class="flex-column">
    <h1 class="courgette-font font-weight-light my-12">{{ data.title }}</h1>
    <div class="d-flex">
      <img
        :src="require(`../static${data.image}`)"
        class="lazyload"
        alt="Alternate text for the image"
        width="40%"
        height="100%"
      >
      <div class="d-flex flex-column ml-12">
        <h2 class="courgette-font font-weight-light">{{ data.restaurant }}</h2>
        <div class="my-5 text-14">{{ data.cuisine }}</div>
        <div v-html="$md.render(data.additionalInfo)" />
        <v-divider class="mt-5" />
      </div>
    </div>
    <h2 class="courgette-font font-weight-light my-10">Order in the room</h2>
    <h2 class="font-weight-light">Menu:</h2>
    <v-expansion-panels
      v-model="panel"
      multiple>
      <v-expansion-panel
        v-for="(item,i) in menuInfo"
        :key="i"
      >
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div 
            v-for="(element,i) in item.menu"
            :key="i"
            class="d-flex menu-checkbox">
            <v-checkbox 
              v-model="selected"
              :value="element.name"
              :label="`${element.name}`"/>
            <span 
              v-if="element.ingredients" 
              class="ml-3 mt-3 text-11">({{ element.ingredients }})</span>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="courgette-font font-weight-light mt-6 system-gold-text text-18">or</div>
    <h2 class="courgette-font my-10 font-weight-light">Reserve a table</h2>
    <div class="d-flex">
      <div class="d-flex flex-column align-center px-5">
        <span class="mb-2 text-center">Scan the QR code with your smartphone</span>
        <img
          src="@/assets/images/qrcode.png"
          alt="qrcode"
          width="100" >
      </div>
      <div class="d-flex flex-column justify-center">
        <div class="courgette-font font-weight-light my-1 system-gold-text text-18">or</div>
        <v-divider
          vertical
          class="ml-2" />
      </div>
      <div class="d-flex flex-column align-center px-5">
        <span class="mb-2 text-center">Call our reception to reserve a table</span>
        <span class="bold-text">{{ data.phoneNumber }}</span>
      </div>
      <div class="d-flex flex-column justify-center">
        <div class="courgette-font font-weight-light my-1 system-gold-text text-18">or</div>
        <v-divider
          vertical
          class="ml-2" />
      </div>
      <div class="d-flex flex-column align-center px-5">
        <span class="mb-2 text-center">Visit our website to make a booking</span>
        <span class="bold-text">{{ data.website }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      panel: [],
      menuInfo: [],
      menuList: [
        {
          id: 1,
          content: [
            {
              title: 'HOT CEREALS',
              menu: [
                {
                  name: 'Cream of wheat',
                  ingredients: 'prepared with milk or water',
                },
                {
                  name: 'Porridge',
                  ingredients: 'hot oatmeal prepared with milk or water',
                },
              ],
            },
            {
              title: 'CHEF’S SELECTION OF EGG DISHE',
              menu: [
                {
                  name: 'BOILED EGGS',
                  ingredients:
                    'boiled according to your preferences (3, 6 or 9 minutes)',
                },
                {
                  name: 'Poached eggs',
                  ingredients: '2 eggs served on toast',
                },
                {
                  name: 'Eggs florentine',
                  ingredients:
                    'Poached eggs on toast with Hollandaise sauce, served with smoked salmon',
                },
                {
                  name: 'Frittata a la Adriana',
                  ingredients:
                    'With fresh arugula, asparagus, cottage cheese, cherry tomatoes and Swiss cheese',
                },
              ],
            },
            {
              title: 'OUR SPECIALITIES',
              menu: [
                {
                  name: 'Adriana favorite brioche french toast',
                  ingredients:
                    'all served with maple syrup or whipped cream or nuts or bananas or fresh mint or seasonal frit',
                },
                {
                  name: 'Homemade yogurt',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          content: [
            {
              title: 'FOOD MENU',
              menu: [
                {
                  name: 'Home made Focaccia',
                  ingredients:
                    'Classic homemade focaccia seasoned with salt and oregano, and homemade olive oil',
                },
                {
                  name: 'Panko fried Shrimp',
                  ingredients:
                    'Served with wakame sesame salad, sweet chilli and avocado & jalapenos dip',
                },
                {
                  name: 'Nicoise Salad/',
                  ingredients:
                    'Green salad lettuce, green beans, boiled eggs, tomatoes, onion, capers and seared tuna',
                },
                {
                  name: 'Shrimp Soba Noodles/',
                  ingredients:
                    'Wok Teriyaki shrimp, sautéed Julienne vegetables with soba noodles',
                },
                {
                  name: 'BLT Club sandwich',
                  ingredients:
                    'Traditional club sandwich with lettuce, bacon, tomatoes, aurora dressing served with steak fries',
                },
              ],
            },
            {
              title: 'DESSERTS',
              menu: [
                {
                  name: 'Matcha Green Tea & Chocolate Cake',
                  ingredients:
                    'Served with Matcha green tea sorbet and toffee sauce',
                },
                {
                  name: 'Summer Love ',
                  ingredients:
                    'Berry fruits with vanilla ice cream, chocolate cake, sprinkled with crunchy almonds and honey',
                },
                {
                  name: 'Seasonal Fruit Selection',
                  ingredients: 'Assorted seasonal fresh fruits',
                },
                {
                  name: 'White chocolate parafait',
                  ingredients:
                    'White chocolate parafait with strawberries sorbet',
                },
              ],
            },
            {
              title: 'SOFT DRINKS MENU',
              menu: [
                { name: 'Espresso' },
                { name: 'Macchiato' },
                { name: 'Cappuccino' },
                { name: 'Coca cola' },
                { name: 'Pipi orange' },
                { name: 'Apple cider' },
              ],
            },
            {
              title: 'ALCOHOLIC DRINKS MENU',
              menu: [
                { name: 'Corona Extra' },
                { name: 'Stella Artois' },
                { name: 'Chardonnay Meneghetti' },
                { name: 'Pinot Grigio delle Venezie' },
                { name: 'Rum Bacardi white' },
                { name: 'Tequila Don Julio Reposado' },
              ],
            },
          ],
        },
        {
          id: 3,
          content: [
            {
              title: 'FOOD MENU',
              menu: [
                {
                  name: 'Local goat cheese caprese',
                  ingredients:
                    'local fresh goats cheese/local tomatoes/basil jelly',
                },
                {
                  name: 'Beef carpaccio',
                  ingredients:
                    'beef carpaccio/black truffle vinaigrette/ micro greens/pine nuts/parmigiano shavings',
                },
                {
                  name: 'Smoked Salmon',
                  ingredients:
                    'smoked salmon/pork cracklings /beluga lentils/wasabi/dehydrated raspberry',
                },
                {
                  name: 'Shrimp BISQUE',
                  ingredients:
                    'Creamy shrimp chowder/prawn/clams/Mediterranean spiced focaccia/aioli sauce',
                },
                {
                  name: 'Tuna steak',
                  ingredients:
                    'grilled tuna steak/broad beans/ chickpeas falafel/salt/pepper/olive oil',
                },
                {
                  name: 'Wild sea bass',
                  ingredients:
                    'grilled sea bass filet/spinach cream/micro greens/salt/pepper/olive oil',
                },
                { name: 'Texas rib eye steak' },
                { name: 'Black angus filet steak' },
                {
                  name: 'Soba noodle',
                  ingredients: 'buckwheat noodles/ soya sauce/ butter/ shrimps',
                },
                {
                  name: 'Hand rolled pasta with clams',
                  ingredients: 'clams /tomatoes sauce/garlic/white wine',
                },
                {
                  name: 'Duck breast',
                  ingredients:
                    'parsnip cream/croquette of sweet potato/ glazed beetroot /pistachio powder',
                },
              ],
            },
            {
              title: 'WINE LIST',
              menu: [
                { name: 'Pošip Aurum, Zlatan Otok, Vintage 2017 ' },
                { name: 'Bogdanusa Zlatan Otok, Hvar ' },
                { name: 'Pinot Grigio delle Venezie, Bolla, Italy ' },
                { name: 'Crljenak - Zinfandel, Zlatan otok, Hvar ' },
                { name: 'Chateau Margaux, Premier Cru Classé, 2004 Bordeaux ' },
                { name: 'Chateau Haut Brion 2009 ' },
                { name: 'Le Fleur Petrus ' },
                { name: 'Brut Imperial, Moet & Chandon, France ' },
                { name: 'Dom Perignon, Moet & Chandon, France ' },
                { name: 'Muškat Kozlovic´, Istra ' },
              ],
            },
          ],
        },
        {
          id: 4,
          content: [
            {
              title: 'APPERIZERS',
              menu: [
                {
                  name: 'Local goat cheese caprese',
                  ingredients:
                    'local fresh goats cheese/local tomatoes/basil jelly/ green olives ',
                },
                {
                  name: 'Yin Yang tuna',
                  ingredients:
                    'Adriatic Tuna/Sesamelemon marmalade/dried cherry tomatoes/pickled rock samphire/young zucchini',
                },
                {
                  name: 'Beef carpaccio',
                  ingredients:
                    'beef carpaccio/black truffle vinaigrette/ micro greens/pine nuts/parmigiano shavings ',
                },
                {
                  name: 'Sea bass cevich',
                  ingredients:
                    'sea bass/lime/local olive oil/sea salt/black pepper/flowers',
                },
                {
                  name: 'Smoked Salmon',
                  ingredients:
                    'Smoked salmon/pork cracklings /beluga lentils/wasabi/dehydrated raspberry',
                },
              ],
            },
            {
              title: 'Cocktail list',
              menu: [
                {
                  name: 'CUCUMBER COOLER',
                  ingredients: 'Gin Hendricks, Lemon, Elderflower syrup & Mint',
                },
                {
                  name: 'SUNNY DAY ',
                  ingredients:
                    'Vodka Belvedere, Lemon, Mango puree & Pineapple juice',
                },
                {
                  name: 'FROZé ',
                  ingredients:
                    'Rose wine, Simple syrup, Strawberry puree & Lime juice',
                },
                {
                  name: 'CARROT MOSCOW MULE ',
                  ingredients:
                    'Vodka Belvedere, Ginger beer, Lime juice & Carrot puree',
                },
                {
                  name: 'MOSCOW MULE ',
                  ingredients: 'Vodka, Ginger beer & Lime',
                },
                {
                  name: 'ST.GERMAIN DE PRES',
                  ingredients:
                    'Gin, Elderflower liquer, Lime juice, Egg white & Chilli',
                },
              ],
            },
            {
              title: 'BEER',
              menu: [
                { name: 'Ožujsko 0,33, Croatia ' },
                {
                  name: 'Ožujsko 0,33 Limun/Lemon-flavored beer 0,33, Croatia ',
                },
                { name: 'Corona Extra 0,33 ' },
                { name: 'Stella Artois, Belgian pilsner 0,33 ' },
                { name: 'Becks, German pilsner 0,33 ' },
                { name: 'Leffe brune, Belgian abbey beer 0,33 ' },
                { name: 'Blue Moon, Belgian style wheat ale, 033 ' },
              ],
            },
            {
              title: 'WHISKY',
              menu: [
                {
                  name: 'Johnnie Walker Black, aged for a minimum of 12 years ',
                },
                { name: 'Jameson 12Y, blended Irish Whiskey ' },
                {
                  name:
                    'Bulleit Bourbon Frontier Whiskey, 10 Y.O, high rye, Kentucky ',
                },
                { name: 'Glenfiddich 15 Y.O, Single malt Whisky ' },
                { name: 'Dalwhinie 15Y, highland single Malt Scotch Whisky ' },
                { name: 'Cragganmore, Scotch Whisky ' },
                { name: 'Talisker 10y, Island Single Malt Scotch Whisky ' },
              ],
            },
            {
              title: 'WINE',
              menu: [
                { name: 'Bogdanuša Zlatan Otok, Hvar ' },
                { name: 'Pinot Grigio delle Venezie, Bolla, Italy ' },
                { name: 'Rose Zlatan otok 2018, Hvar ' },
                { name: 'Plavac mali, Zlatan Otok, Hvar ' },
                { name: 'Syrah Korlat, Benkovac ' },
                { name: 'Prosecco il fresco, Villa Sandi, Veneto, Italy ' },
                { name: 'Brut Imperial, Moet & Chandon, France ' },
                { name: 'Muškat Kozlovic, Istra ' },
              ],
            },
            {
              title: 'COFFEE',
              menu: [
                { name: 'Espresso' },
                { name: 'Double espresso' },
                { name: 'Macchiato' },
                { name: 'Cappuccino' },
                { name: 'Latte macchiato ' },
                { name: 'Nescafe vanilla ' },
                { name: 'Ice coffee with ice cream ' },
                { name: 'Irish coffee ' },
                { name: 'Matcha tea ' },
              ],
            },
            {
              title: 'TEA COLLECTION',
              menu: [
                {
                  name: 'Silver Pi Lo Chun China',
                  ingredients:
                    'Green tea from the Jiangsu province of China. Pi Lo Chun is made of the finest tender buds, gathered and processed exclusively by hand. Perfumed and sweet floral, with a full body and slight earthiness. Lingering with an aromatic finish',
                },
                {
                  name: 'Splendid Earl Grey India',
                  ingredients:
                    'Fresh bergamot flavor in a seductive blend of precious teas from India with a full-bodied and intensive flavor. Black tea',
                },
                {
                  name: 'Superior Oolong Taiwan',
                  ingredients:
                    'Only a few kilograms of this rare tea are harvested annually. It fascinates with it’s elegance and subtlety and the nutty-fruity character.',
                },
                {
                  name: 'Classic English Tea',
                  ingredients:
                    'Harvested from summer onwards this exuberant Ceylon tea comes with a charismatic tangy fullness and sparkling flavor, full-bodied Black tea',
                },
                {
                  name: 'Jasmine Pearls China',
                  ingredients:
                    'Specially flavoured green tea. Fresh and delicious. The leaves of this rare, special tea from China are picked by hand and rolled into small balls, without breaking the veins, and are flavored with jasmine flowers',
                },
              ],
            },
          ],
        },
      ],
      selected: [],
    };
  },
  created() {
    this.getInfo();
  },
  updated() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      const info = this.menuList.filter(el => el.id === this.data.id);
      this.menuInfo = info ? info[0].content : [];
    },
  },
};
</script>

<style>
.courgette-font {
  font-family: 'Courgette', cursive;
}

.text-11 {
  font-size: 11px;
}

.text-14 {
  font-size: 14px;
}

.text-18 {
  font-size: 18px;
}

.system-gold-text {
  color: #846b42;
}

.bold-text {
  font-weight: bold;
}

.theme--light.v-divider {
  border-color: #846b42;
}

.menu-checkbox .v-input--selection-controls {
  margin-top: 0;
}

.menu-checkbox .v-messages {
  display: none;
}
</style>
