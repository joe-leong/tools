<template>
  <div>
    时间组件
  </div>
</template>

<script>
export default {
  name: "dateCom",
  data() {
    return {
      tree: [
        {
          id: 1,
          children: [
            {
              id: 2,
            },
            {
              id: 3,
            },
            {
              id: 4,
            },
            {
              id: 5,
              children: [
                {
                  id: 6,
                },
                {
                  id: 7,
                },
                {
                  id: 8,
                },
              ],
            },
          ],
        },
        {
          id: 9,
          children: [
            {
              id: 10,
            },
            {
              id: 11,
            },
            {
              id: 12,
            },
            {
              id: 13,
              children: [
                {
                  id: 14,
                },
                {
                  id: 15,
                },
                {
                  id: 16,
                },
                {
                  id: 16,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  updated() {},
  mounted() {
    console.log(this.recursive({ tree: this.tree }));
    console.log(this.dealDate({year:2015,max:11,min:'',split:'-',reverse:true}));
  },
  methods: {
    dealDate({
      year = new Date().getFullYear(),
      min = "",
      max = "",
      split = "/",
      reverse = false,
    }) {
      /* 
                min:开始月份(返回值包含)
                max:结束月份（返回值包含）
                */
      let dateArr = [];
      if (min && max) {
        dateArr = [...new Array(max - min + 1)].map((item, idx) => {
          if (idx <= max) {
            return `${year}${split}${max - min + idx - 1}`;
          }
        }, []);
        return reverse ? dateArr.reverse() : dateArr;
      }
      if (min) {
        dateArr = [...new Array(12 - min + 1)].map((item, idx) => {
          if (idx <= 12) {
            return `${year}${split}${min + idx}`;
          }
        }, []);
        return reverse ? dateArr.reverse() : dateArr;
      }
      if (max) {
        dateArr = [...new Array(max)].map((item, idx) => {
          if (idx < max) {
            return `${year}${split}${idx + 1}`;
          }
        }, []);
        return reverse ? dateArr.reverse() : dateArr;
      }
    },
    recursive({ tree = [], key = "id", child = "children", unique = true }) {
      let tempArr = [];
      tree.forEach((item) => {
        tempArr.push(item[key]);
        if (item[child]) {
          tempArr = [].concat(
            tempArr,
            this.recursive({ tree: item[child], key, child })
          );
        }
      });
      return unique ? [...new Set(tempArr)] : tempArr;
    },
  },
};
</script>

<style lang="scss" scoped></style>
