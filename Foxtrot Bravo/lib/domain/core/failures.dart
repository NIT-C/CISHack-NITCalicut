import 'package:flutter/foundation.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'failures.freezed.dart';

@freezed
abstract class ValueFailure<T> with _$ValueFailure<T> {

  const factory ValueFailure.unexpectedValueError({
    @required T failedValue,
  }) = UnexpectedValueError<T>;
  
  const factory ValueFailure.invalidEmail({
    @required T failedValue,
  }) = InvalidEmail<T>;

  const factory ValueFailure.invalidString({
    @required T failedValue,
  }) = InvalidString<T>;
  
  const factory ValueFailure.invalidURL({
    @required T failedValue,
  }) = InvalidURL<T>;

  const factory ValueFailure.invalidPhoneNumber({
    @required T failedValue,
  }) = InvalidPhoneNumber<T>;

}
