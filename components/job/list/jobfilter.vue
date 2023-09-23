<template>
  <div class="card">
    <div
      class="card-header"
      id="headingOne"
    >
      <h2 class="mb-0">
        <button
          class="btn btn-link btn-block text-start"
          type="button"
          data-bs-target="#collapseOne"
          :aria-expanded="active ? 'false' : 'true'"
          aria-controls="collapseOne"
          @click="active = !active"
        >
          Төрөл сонгох
        </button>
      </h2>
    </div>
    <div
      class="collapse"
      :class="active ? '' : 'show'"
      id="collapseOne"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div class="card-body filter-cards-view animate-chk">
        <div class="checkbox-animated mt-2">
          <label
            class="d-block"
            for="chk-ani"
          >
            <input
              class="checkbox_animated"
              id="chk-ani"
              type="checkbox"
            />Бүтэн цагаар
          </label>
          <label
            class="d-block"
            for="chk-ani1"
          >
            <input
              class="checkbox_animated"
              id="chk-ani1"
              type="checkbox"
            />Гэрээт
          </label>
          <label
            class="d-block"
            for="chk-ani2"
          >
            <input
              class="checkbox_animated"
              id="chk-ani2"
              type="checkbox"
            />Цагийн ажил
          </label>
          <label
            class="d-block"
            for="chk-ani3"
          >
            <input
              class="checkbox_animated"
              id="chk-ani3"
              type="checkbox"
            />Дадлагжих хөтөлбөр
          </label>
          <label
            class="d-block"
            for="chk-ani4"
          >
            <input
              class="checkbox_animated"
              id="chk-ani4"
              type="checkbox"
            />Түр ажил
          </label>
        </div>
        <button
          class="btn btn-primary text-center"
          type="button"
        >
          Find jobs
        </button>
      </div>
    </div>
  </div>
  <div class="card">
    <div
      class="card-header"
      id="headingTwo"
    >
      <h2 class="mb-0">
        <button
          class="btn btn-link btn-block text-start collapsed"
          type="button"
          data-bs-target="#collapseTwo"
          :aria-expanded="active1 ? 'false' : 'true'"
          aria-controls="collapseTwo"
          @click="active1 = !active1"
        >
          Location
        </button>
      </h2>
    </div>
    <div
      class="collapse"
      :class="active1 ? '' : 'show'"
      id="collapseTwo"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div class="card-body animate-chk">
        <div class="location-checkbox">
          <div
            v-for="(work, index) in fieldOfWorks"
            :key="`work_field_${index}`"
            class="mb-2"
          >
            <label :for="work.id">
              <input
                v-model="selectedField"
                type="radio"
                class="radio_animated"
                :id="work.id"
                :value="work.id"
                name="work_field"
              />
              {{ work.name }}
            </label>
          </div>
        </div>
      </div>
      <button
        class="btn btn-block btn-primary text-center"
        type="button"
      >
        All Locations
      </button>
    </div>
  </div>
  <div class="card">
    <div
      class="card-header"
      id="headingThree"
    >
      <h2 class="mb-0">
        <button
          class="btn btn-link btn-block text-start collapsed"
          type="button"
          data-bs-target="#collapseThree"
          :aria-expanded="active2 ? 'false' : 'true'"
          aria-controls="collapseThree"
          @click="active2 = !active2"
        >
          Location1
        </button>
      </h2>
    </div>
    <div
      class="collapse"
      :class="active2 ? '' : 'show'"
      id="collapseThree"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div class="card-body animate-chk">
        <div class="location-checkbox">
          <label
            class="d-block"
            for="chk-ani6"
          >
            <input
              class="checkbox_animated"
              id="chk-ani6"
              type="checkbox"
            />
            Автомашин, засвар үйлчилгээ
          </label>
          <label
            class="d-block"
            for="chk-ani7"
          >
            <input
              class="checkbox_animated"
              id="chk-ani7"
              type="checkbox"
            />
            San Francisco<span class="d-block">CA (252)</span>
          </label>
          <label
            class="d-block"
            for="chk-ani8"
          >
            <input
              class="checkbox_animated"
              id="chk-ani8"
              type="checkbox"
            />
            Washington<span class="d-block">DC (226)</span>
          </label>
          <label
            class="d-block"
            for="chk-ani9"
          >
            <input
              class="checkbox_animated"
              id="chk-ani9"
              type="checkbox"
            />
            Seattle<span class="d-block">WA (242)</span>
          </label>
          <label
            class="d-block"
            for="chk-ani10"
          >
            <input
              class="checkbox_animated"
              id="chk-ani10"
              type="checkbox"
            />
            Chicago<span class="d-block">IL (187)</span>
          </label>
        </div>
      </div>
      <button
        class="btn btn-block btn-primary text-center"
        type="button"
      >
        All Locations
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      active1: false,
      active2: false,
      fieldOfWorks: [
        {
          selected: true,
          name: 'Автомашин, засвар үйлчилгээ',
          id: 'work_field_machine'
        },
        { selected: false, name: 'Аялал жуулчлал', id: 'work_field_tour' },
        {
          selected: false,
          name: 'Банк, санхүү, эдийн засаг, даатгал',
          id: 'work_field_bank'
        },
        {
          selected: false,
          name: 'Барилга, Инженеринг',
          id: 'work_field_construction'
        },
        {
          selected: false,
          name: 'Бизнес менежмент',
          id: 'work_field_business'
        },
        {
          selected: false,
          name: 'Боловсрол, нийгмийн ухаан',
          id: 'work_field_education'
        },
        { selected: false, name: 'Дизайн', id: 'work_field_design' },
        { selected: false, name: 'Дэд бүтэц', id: 'work_field_sub_struct' },
        {
          selected: false,
          name: 'Зочид буудал, ресторан',
          id: 'work_field_hotel'
        },
        { selected: false, name: 'Маркетинг, PR', id: 'work_field_marketing' },
        { selected: false, name: 'Мэдээлэл технологи', id: 'work_field_it' },
        {
          selected: false,
          name: 'Спорт, Гоо сайхан, Фитнесс',
          id: 'work_field_sport'
        },
        {
          selected: false,
          name: 'Төрийн болон ТББ, ОУБ',
          id: 'work_field_goverment'
        },
        {
          selected: false,
          name: 'Тээвэр, гааль, агуулах',
          id: 'work_field_tranport'
        },
        {
          selected: false,
          name: 'Уул уурхай, газрын тос',
          id: 'work_field_mining'
        },
        { selected: false, name: 'Үйлдвэрлэл', id: 'work_field_factory' },
        { selected: false, name: 'Үйлчилгээ', id: 'work_field_service' },
        { selected: false, name: 'Үл хөдлөх хөрөнгө', id: 'work_field_remax' },
        {
          selected: false,
          name: 'ХАА, Байгаль экологи',
          id: 'work_field_ecology'
        },
        { selected: false, name: 'Харилцаа холбоо', id: 'work_field_tele' },
        {
          selected: false,
          name: 'Харуул хамгаалалт',
          id: 'work_field_secuirity'
        },
        {
          selected: false,
          name: 'Худалдаа, Борлуулалт',
          id: 'work_field_selling'
        },
        { selected: false, name: 'Хууль эрх зүй', id: 'work_field_law' },
        { selected: false, name: 'Хүний нөөц, захиргаа', id: 'work_field_hr' },
        {
          selected: false,
          name: 'Хэвлэл мэдээлэл, Медиа',
          id: 'work_field_media'
        },
        { selected: false, name: 'Шинжлэх ухаан', id: 'work_field_science' },
        {
          selected: false,
          name: 'Энтертайнмент, Соёл урлаг',
          id: 'work_field_entertainment'
        },
        { selected: false, name: 'Эрүүл мэнд', id: 'work_field_health' },
        { selected: false, name: 'Бусад', id: 'work_field_etc' }
      ],
      selectedField: ''
    };
  }
};
</script>
