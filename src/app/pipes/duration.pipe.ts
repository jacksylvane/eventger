import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const durationHours = Math.floor(value / 60);
    const durationHoursSentence = durationHours < 2 ? `${durationHours} hour` : `${durationHours} hours`;

    const leftoverMinutes = value % 60;
    if (leftoverMinutes !== 0) {
      const durationMinutesSentence = leftoverMinutes < 2 ? `${leftoverMinutes} minute` : `${leftoverMinutes} minutes`;
      return durationHours === 0 ? durationMinutesSentence : `${durationHoursSentence} ${durationMinutesSentence}`;
    }

    return durationHoursSentence;
  }
}
