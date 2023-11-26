<script lang="ts">
  import type { ChangeEventHandler } from 'svelte/elements';
  import InputWrap from '~/ui/2_base/input-wrap/InputWrap.svelte';

  export let title = '';
  export let name = '';
  export let date = '';
  export let withTime = false;

  const _date = new Date(date);

  const formatDate = (d: Date) => [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-');
  const change = () => {
    date = _date.toISOString();
  };

  const changeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    const [year, month, day] = e.currentTarget.value.split('-');

    _date.setFullYear(Number(year));
    _date.setMonth(Number(month) - 1);
    _date.setDate(Number(day));

    change();
  };

  const changeTime: ChangeEventHandler<HTMLInputElement> = (e) => {
    const [hour, minute] = e.currentTarget.value.split(':');

    _date.setHours(Number(hour));
    _date.setMinutes(Number(minute));

    change();
  };
</script>

<InputWrap {title}>
  <input name="{name}-date" value="{formatDate(_date)}" type="date" style="flex: 1;" on:change="{changeDate}" />
  {#if withTime}
    <input name="{name}-time" value="{_date.toTimeString().slice(0, 5)}" type="time" on:change="{changeTime}" />
  {/if}
</InputWrap>
