// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies

part of 'failures.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

/// @nodoc
class _$ValueFailureTearOff {
  const _$ValueFailureTearOff();

// ignore: unused_element
  UnexpectedValueError<T> unexpectedValueError<T>({@required T failedValue}) {
    return UnexpectedValueError<T>(
      failedValue: failedValue,
    );
  }

// ignore: unused_element
  InvalidEmail<T> invalidEmail<T>({@required T failedValue}) {
    return InvalidEmail<T>(
      failedValue: failedValue,
    );
  }

// ignore: unused_element
  InvalidString<T> invalidString<T>({@required T failedValue}) {
    return InvalidString<T>(
      failedValue: failedValue,
    );
  }

// ignore: unused_element
  InvalidURL<T> invalidURL<T>({@required T failedValue}) {
    return InvalidURL<T>(
      failedValue: failedValue,
    );
  }

// ignore: unused_element
  InvalidPhoneNumber<T> invalidPhoneNumber<T>({@required T failedValue}) {
    return InvalidPhoneNumber<T>(
      failedValue: failedValue,
    );
  }
}

/// @nodoc
// ignore: unused_element
const $ValueFailure = _$ValueFailureTearOff();

/// @nodoc
mixin _$ValueFailure<T> {
  T get failedValue;

  @optionalTypeArgs
  TResult when<TResult extends Object>({
    @required TResult unexpectedValueError(T failedValue),
    @required TResult invalidEmail(T failedValue),
    @required TResult invalidString(T failedValue),
    @required TResult invalidURL(T failedValue),
    @required TResult invalidPhoneNumber(T failedValue),
  });
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object>({
    TResult unexpectedValueError(T failedValue),
    TResult invalidEmail(T failedValue),
    TResult invalidString(T failedValue),
    TResult invalidURL(T failedValue),
    TResult invalidPhoneNumber(T failedValue),
    @required TResult orElse(),
  });
  @optionalTypeArgs
  TResult map<TResult extends Object>({
    @required TResult unexpectedValueError(UnexpectedValueError<T> value),
    @required TResult invalidEmail(InvalidEmail<T> value),
    @required TResult invalidString(InvalidString<T> value),
    @required TResult invalidURL(InvalidURL<T> value),
    @required TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
  });
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object>({
    TResult unexpectedValueError(UnexpectedValueError<T> value),
    TResult invalidEmail(InvalidEmail<T> value),
    TResult invalidString(InvalidString<T> value),
    TResult invalidURL(InvalidURL<T> value),
    TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
    @required TResult orElse(),
  });

  @JsonKey(ignore: true)
  $ValueFailureCopyWith<T, ValueFailure<T>> get copyWith;
}

/// @nodoc
abstract class $ValueFailureCopyWith<T, $Res> {
  factory $ValueFailureCopyWith(
          ValueFailure<T> value, $Res Function(ValueFailure<T>) then) =
      _$ValueFailureCopyWithImpl<T, $Res>;
  $Res call({T failedValue});
}

/// @nodoc
class _$ValueFailureCopyWithImpl<T, $Res>
    implements $ValueFailureCopyWith<T, $Res> {
  _$ValueFailureCopyWithImpl(this._value, this._then);

  final ValueFailure<T> _value;
  // ignore: unused_field
  final $Res Function(ValueFailure<T>) _then;

  @override
  $Res call({
    Object failedValue = freezed,
  }) {
    return _then(_value.copyWith(
      failedValue:
          failedValue == freezed ? _value.failedValue : failedValue as T,
    ));
  }
}

/// @nodoc
abstract class $UnexpectedValueErrorCopyWith<T, $Res>
    implements $ValueFailureCopyWith<T, $Res> {
  factory $UnexpectedValueErrorCopyWith(UnexpectedValueError<T> value,
          $Res Function(UnexpectedValueError<T>) then) =
      _$UnexpectedValueErrorCopyWithImpl<T, $Res>;
  @override
  $Res call({T failedValue});
}

/// @nodoc
class _$UnexpectedValueErrorCopyWithImpl<T, $Res>
    extends _$ValueFailureCopyWithImpl<T, $Res>
    implements $UnexpectedValueErrorCopyWith<T, $Res> {
  _$UnexpectedValueErrorCopyWithImpl(UnexpectedValueError<T> _value,
      $Res Function(UnexpectedValueError<T>) _then)
      : super(_value, (v) => _then(v as UnexpectedValueError<T>));

  @override
  UnexpectedValueError<T> get _value => super._value as UnexpectedValueError<T>;

  @override
  $Res call({
    Object failedValue = freezed,
  }) {
    return _then(UnexpectedValueError<T>(
      failedValue:
          failedValue == freezed ? _value.failedValue : failedValue as T,
    ));
  }
}

/// @nodoc
class _$UnexpectedValueError<T>
    with DiagnosticableTreeMixin
    implements UnexpectedValueError<T> {
  const _$UnexpectedValueError({@required this.failedValue})
      : assert(failedValue != null);

  @override
  final T failedValue;

  @override
  String toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) {
    return 'ValueFailure<$T>.unexpectedValueError(failedValue: $failedValue)';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
      ..add(
          DiagnosticsProperty('type', 'ValueFailure<$T>.unexpectedValueError'))
      ..add(DiagnosticsProperty('failedValue', failedValue));
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other is UnexpectedValueError<T> &&
            (identical(other.failedValue, failedValue) ||
                const DeepCollectionEquality()
                    .equals(other.failedValue, failedValue)));
  }

  @override
  int get hashCode =>
      runtimeType.hashCode ^ const DeepCollectionEquality().hash(failedValue);

  @JsonKey(ignore: true)
  @override
  $UnexpectedValueErrorCopyWith<T, UnexpectedValueError<T>> get copyWith =>
      _$UnexpectedValueErrorCopyWithImpl<T, UnexpectedValueError<T>>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object>({
    @required TResult unexpectedValueError(T failedValue),
    @required TResult invalidEmail(T failedValue),
    @required TResult invalidString(T failedValue),
    @required TResult invalidURL(T failedValue),
    @required TResult invalidPhoneNumber(T failedValue),
  }) {
    assert(unexpectedValueError != null);
    assert(invalidEmail != null);
    assert(invalidString != null);
    assert(invalidURL != null);
    assert(invalidPhoneNumber != null);
    return unexpectedValueError(failedValue);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object>({
    TResult unexpectedValueError(T failedValue),
    TResult invalidEmail(T failedValue),
    TResult invalidString(T failedValue),
    TResult invalidURL(T failedValue),
    TResult invalidPhoneNumber(T failedValue),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (unexpectedValueError != null) {
      return unexpectedValueError(failedValue);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object>({
    @required TResult unexpectedValueError(UnexpectedValueError<T> value),
    @required TResult invalidEmail(InvalidEmail<T> value),
    @required TResult invalidString(InvalidString<T> value),
    @required TResult invalidURL(InvalidURL<T> value),
    @required TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
  }) {
    assert(unexpectedValueError != null);
    assert(invalidEmail != null);
    assert(invalidString != null);
    assert(invalidURL != null);
    assert(invalidPhoneNumber != null);
    return unexpectedValueError(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object>({
    TResult unexpectedValueError(UnexpectedValueError<T> value),
    TResult invalidEmail(InvalidEmail<T> value),
    TResult invalidString(InvalidString<T> value),
    TResult invalidURL(InvalidURL<T> value),
    TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (unexpectedValueError != null) {
      return unexpectedValueError(this);
    }
    return orElse();
  }
}

abstract class UnexpectedValueError<T> implements ValueFailure<T> {
  const factory UnexpectedValueError({@required T failedValue}) =
      _$UnexpectedValueError<T>;

  @override
  T get failedValue;
  @override
  @JsonKey(ignore: true)
  $UnexpectedValueErrorCopyWith<T, UnexpectedValueError<T>> get copyWith;
}

/// @nodoc
abstract class $InvalidEmailCopyWith<T, $Res>
    implements $ValueFailureCopyWith<T, $Res> {
  factory $InvalidEmailCopyWith(
          InvalidEmail<T> value, $Res Function(InvalidEmail<T>) then) =
      _$InvalidEmailCopyWithImpl<T, $Res>;
  @override
  $Res call({T failedValue});
}

/// @nodoc
class _$InvalidEmailCopyWithImpl<T, $Res>
    extends _$ValueFailureCopyWithImpl<T, $Res>
    implements $InvalidEmailCopyWith<T, $Res> {
  _$InvalidEmailCopyWithImpl(
      InvalidEmail<T> _value, $Res Function(InvalidEmail<T>) _then)
      : super(_value, (v) => _then(v as InvalidEmail<T>));

  @override
  InvalidEmail<T> get _value => super._value as InvalidEmail<T>;

  @override
  $Res call({
    Object failedValue = freezed,
  }) {
    return _then(InvalidEmail<T>(
      failedValue:
          failedValue == freezed ? _value.failedValue : failedValue as T,
    ));
  }
}

/// @nodoc
class _$InvalidEmail<T>
    with DiagnosticableTreeMixin
    implements InvalidEmail<T> {
  const _$InvalidEmail({@required this.failedValue})
      : assert(failedValue != null);

  @override
  final T failedValue;

  @override
  String toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) {
    return 'ValueFailure<$T>.invalidEmail(failedValue: $failedValue)';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
      ..add(DiagnosticsProperty('type', 'ValueFailure<$T>.invalidEmail'))
      ..add(DiagnosticsProperty('failedValue', failedValue));
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other is InvalidEmail<T> &&
            (identical(other.failedValue, failedValue) ||
                const DeepCollectionEquality()
                    .equals(other.failedValue, failedValue)));
  }

  @override
  int get hashCode =>
      runtimeType.hashCode ^ const DeepCollectionEquality().hash(failedValue);

  @JsonKey(ignore: true)
  @override
  $InvalidEmailCopyWith<T, InvalidEmail<T>> get copyWith =>
      _$InvalidEmailCopyWithImpl<T, InvalidEmail<T>>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object>({
    @required TResult unexpectedValueError(T failedValue),
    @required TResult invalidEmail(T failedValue),
    @required TResult invalidString(T failedValue),
    @required TResult invalidURL(T failedValue),
    @required TResult invalidPhoneNumber(T failedValue),
  }) {
    assert(unexpectedValueError != null);
    assert(invalidEmail != null);
    assert(invalidString != null);
    assert(invalidURL != null);
    assert(invalidPhoneNumber != null);
    return invalidEmail(failedValue);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object>({
    TResult unexpectedValueError(T failedValue),
    TResult invalidEmail(T failedValue),
    TResult invalidString(T failedValue),
    TResult invalidURL(T failedValue),
    TResult invalidPhoneNumber(T failedValue),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (invalidEmail != null) {
      return invalidEmail(failedValue);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object>({
    @required TResult unexpectedValueError(UnexpectedValueError<T> value),
    @required TResult invalidEmail(InvalidEmail<T> value),
    @required TResult invalidString(InvalidString<T> value),
    @required TResult invalidURL(InvalidURL<T> value),
    @required TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
  }) {
    assert(unexpectedValueError != null);
    assert(invalidEmail != null);
    assert(invalidString != null);
    assert(invalidURL != null);
    assert(invalidPhoneNumber != null);
    return invalidEmail(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object>({
    TResult unexpectedValueError(UnexpectedValueError<T> value),
    TResult invalidEmail(InvalidEmail<T> value),
    TResult invalidString(InvalidString<T> value),
    TResult invalidURL(InvalidURL<T> value),
    TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (invalidEmail != null) {
      return invalidEmail(this);
    }
    return orElse();
  }
}

abstract class InvalidEmail<T> implements ValueFailure<T> {
  const factory InvalidEmail({@required T failedValue}) = _$InvalidEmail<T>;

  @override
  T get failedValue;
  @override
  @JsonKey(ignore: true)
  $InvalidEmailCopyWith<T, InvalidEmail<T>> get copyWith;
}

/// @nodoc
abstract class $InvalidStringCopyWith<T, $Res>
    implements $ValueFailureCopyWith<T, $Res> {
  factory $InvalidStringCopyWith(
          InvalidString<T> value, $Res Function(InvalidString<T>) then) =
      _$InvalidStringCopyWithImpl<T, $Res>;
  @override
  $Res call({T failedValue});
}

/// @nodoc
class _$InvalidStringCopyWithImpl<T, $Res>
    extends _$ValueFailureCopyWithImpl<T, $Res>
    implements $InvalidStringCopyWith<T, $Res> {
  _$InvalidStringCopyWithImpl(
      InvalidString<T> _value, $Res Function(InvalidString<T>) _then)
      : super(_value, (v) => _then(v as InvalidString<T>));

  @override
  InvalidString<T> get _value => super._value as InvalidString<T>;

  @override
  $Res call({
    Object failedValue = freezed,
  }) {
    return _then(InvalidString<T>(
      failedValue:
          failedValue == freezed ? _value.failedValue : failedValue as T,
    ));
  }
}

/// @nodoc
class _$InvalidString<T>
    with DiagnosticableTreeMixin
    implements InvalidString<T> {
  const _$InvalidString({@required this.failedValue})
      : assert(failedValue != null);

  @override
  final T failedValue;

  @override
  String toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) {
    return 'ValueFailure<$T>.invalidString(failedValue: $failedValue)';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
      ..add(DiagnosticsProperty('type', 'ValueFailure<$T>.invalidString'))
      ..add(DiagnosticsProperty('failedValue', failedValue));
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other is InvalidString<T> &&
            (identical(other.failedValue, failedValue) ||
                const DeepCollectionEquality()
                    .equals(other.failedValue, failedValue)));
  }

  @override
  int get hashCode =>
      runtimeType.hashCode ^ const DeepCollectionEquality().hash(failedValue);

  @JsonKey(ignore: true)
  @override
  $InvalidStringCopyWith<T, InvalidString<T>> get copyWith =>
      _$InvalidStringCopyWithImpl<T, InvalidString<T>>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object>({
    @required TResult unexpectedValueError(T failedValue),
    @required TResult invalidEmail(T failedValue),
    @required TResult invalidString(T failedValue),
    @required TResult invalidURL(T failedValue),
    @required TResult invalidPhoneNumber(T failedValue),
  }) {
    assert(unexpectedValueError != null);
    assert(invalidEmail != null);
    assert(invalidString != null);
    assert(invalidURL != null);
    assert(invalidPhoneNumber != null);
    return invalidString(failedValue);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object>({
    TResult unexpectedValueError(T failedValue),
    TResult invalidEmail(T failedValue),
    TResult invalidString(T failedValue),
    TResult invalidURL(T failedValue),
    TResult invalidPhoneNumber(T failedValue),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (invalidString != null) {
      return invalidString(failedValue);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object>({
    @required TResult unexpectedValueError(UnexpectedValueError<T> value),
    @required TResult invalidEmail(InvalidEmail<T> value),
    @required TResult invalidString(InvalidString<T> value),
    @required TResult invalidURL(InvalidURL<T> value),
    @required TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
  }) {
    assert(unexpectedValueError != null);
    assert(invalidEmail != null);
    assert(invalidString != null);
    assert(invalidURL != null);
    assert(invalidPhoneNumber != null);
    return invalidString(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object>({
    TResult unexpectedValueError(UnexpectedValueError<T> value),
    TResult invalidEmail(InvalidEmail<T> value),
    TResult invalidString(InvalidString<T> value),
    TResult invalidURL(InvalidURL<T> value),
    TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (invalidString != null) {
      return invalidString(this);
    }
    return orElse();
  }
}

abstract class InvalidString<T> implements ValueFailure<T> {
  const factory InvalidString({@required T failedValue}) = _$InvalidString<T>;

  @override
  T get failedValue;
  @override
  @JsonKey(ignore: true)
  $InvalidStringCopyWith<T, InvalidString<T>> get copyWith;
}

/// @nodoc
abstract class $InvalidURLCopyWith<T, $Res>
    implements $ValueFailureCopyWith<T, $Res> {
  factory $InvalidURLCopyWith(
          InvalidURL<T> value, $Res Function(InvalidURL<T>) then) =
      _$InvalidURLCopyWithImpl<T, $Res>;
  @override
  $Res call({T failedValue});
}

/// @nodoc
class _$InvalidURLCopyWithImpl<T, $Res>
    extends _$ValueFailureCopyWithImpl<T, $Res>
    implements $InvalidURLCopyWith<T, $Res> {
  _$InvalidURLCopyWithImpl(
      InvalidURL<T> _value, $Res Function(InvalidURL<T>) _then)
      : super(_value, (v) => _then(v as InvalidURL<T>));

  @override
  InvalidURL<T> get _value => super._value as InvalidURL<T>;

  @override
  $Res call({
    Object failedValue = freezed,
  }) {
    return _then(InvalidURL<T>(
      failedValue:
          failedValue == freezed ? _value.failedValue : failedValue as T,
    ));
  }
}

/// @nodoc
class _$InvalidURL<T> with DiagnosticableTreeMixin implements InvalidURL<T> {
  const _$InvalidURL({@required this.failedValue})
      : assert(failedValue != null);

  @override
  final T failedValue;

  @override
  String toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) {
    return 'ValueFailure<$T>.invalidURL(failedValue: $failedValue)';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
      ..add(DiagnosticsProperty('type', 'ValueFailure<$T>.invalidURL'))
      ..add(DiagnosticsProperty('failedValue', failedValue));
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other is InvalidURL<T> &&
            (identical(other.failedValue, failedValue) ||
                const DeepCollectionEquality()
                    .equals(other.failedValue, failedValue)));
  }

  @override
  int get hashCode =>
      runtimeType.hashCode ^ const DeepCollectionEquality().hash(failedValue);

  @JsonKey(ignore: true)
  @override
  $InvalidURLCopyWith<T, InvalidURL<T>> get copyWith =>
      _$InvalidURLCopyWithImpl<T, InvalidURL<T>>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object>({
    @required TResult unexpectedValueError(T failedValue),
    @required TResult invalidEmail(T failedValue),
    @required TResult invalidString(T failedValue),
    @required TResult invalidURL(T failedValue),
    @required TResult invalidPhoneNumber(T failedValue),
  }) {
    assert(unexpectedValueError != null);
    assert(invalidEmail != null);
    assert(invalidString != null);
    assert(invalidURL != null);
    assert(invalidPhoneNumber != null);
    return invalidURL(failedValue);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object>({
    TResult unexpectedValueError(T failedValue),
    TResult invalidEmail(T failedValue),
    TResult invalidString(T failedValue),
    TResult invalidURL(T failedValue),
    TResult invalidPhoneNumber(T failedValue),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (invalidURL != null) {
      return invalidURL(failedValue);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object>({
    @required TResult unexpectedValueError(UnexpectedValueError<T> value),
    @required TResult invalidEmail(InvalidEmail<T> value),
    @required TResult invalidString(InvalidString<T> value),
    @required TResult invalidURL(InvalidURL<T> value),
    @required TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
  }) {
    assert(unexpectedValueError != null);
    assert(invalidEmail != null);
    assert(invalidString != null);
    assert(invalidURL != null);
    assert(invalidPhoneNumber != null);
    return invalidURL(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object>({
    TResult unexpectedValueError(UnexpectedValueError<T> value),
    TResult invalidEmail(InvalidEmail<T> value),
    TResult invalidString(InvalidString<T> value),
    TResult invalidURL(InvalidURL<T> value),
    TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (invalidURL != null) {
      return invalidURL(this);
    }
    return orElse();
  }
}

abstract class InvalidURL<T> implements ValueFailure<T> {
  const factory InvalidURL({@required T failedValue}) = _$InvalidURL<T>;

  @override
  T get failedValue;
  @override
  @JsonKey(ignore: true)
  $InvalidURLCopyWith<T, InvalidURL<T>> get copyWith;
}

/// @nodoc
abstract class $InvalidPhoneNumberCopyWith<T, $Res>
    implements $ValueFailureCopyWith<T, $Res> {
  factory $InvalidPhoneNumberCopyWith(InvalidPhoneNumber<T> value,
          $Res Function(InvalidPhoneNumber<T>) then) =
      _$InvalidPhoneNumberCopyWithImpl<T, $Res>;
  @override
  $Res call({T failedValue});
}

/// @nodoc
class _$InvalidPhoneNumberCopyWithImpl<T, $Res>
    extends _$ValueFailureCopyWithImpl<T, $Res>
    implements $InvalidPhoneNumberCopyWith<T, $Res> {
  _$InvalidPhoneNumberCopyWithImpl(
      InvalidPhoneNumber<T> _value, $Res Function(InvalidPhoneNumber<T>) _then)
      : super(_value, (v) => _then(v as InvalidPhoneNumber<T>));

  @override
  InvalidPhoneNumber<T> get _value => super._value as InvalidPhoneNumber<T>;

  @override
  $Res call({
    Object failedValue = freezed,
  }) {
    return _then(InvalidPhoneNumber<T>(
      failedValue:
          failedValue == freezed ? _value.failedValue : failedValue as T,
    ));
  }
}

/// @nodoc
class _$InvalidPhoneNumber<T>
    with DiagnosticableTreeMixin
    implements InvalidPhoneNumber<T> {
  const _$InvalidPhoneNumber({@required this.failedValue})
      : assert(failedValue != null);

  @override
  final T failedValue;

  @override
  String toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) {
    return 'ValueFailure<$T>.invalidPhoneNumber(failedValue: $failedValue)';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
      ..add(DiagnosticsProperty('type', 'ValueFailure<$T>.invalidPhoneNumber'))
      ..add(DiagnosticsProperty('failedValue', failedValue));
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other is InvalidPhoneNumber<T> &&
            (identical(other.failedValue, failedValue) ||
                const DeepCollectionEquality()
                    .equals(other.failedValue, failedValue)));
  }

  @override
  int get hashCode =>
      runtimeType.hashCode ^ const DeepCollectionEquality().hash(failedValue);

  @JsonKey(ignore: true)
  @override
  $InvalidPhoneNumberCopyWith<T, InvalidPhoneNumber<T>> get copyWith =>
      _$InvalidPhoneNumberCopyWithImpl<T, InvalidPhoneNumber<T>>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object>({
    @required TResult unexpectedValueError(T failedValue),
    @required TResult invalidEmail(T failedValue),
    @required TResult invalidString(T failedValue),
    @required TResult invalidURL(T failedValue),
    @required TResult invalidPhoneNumber(T failedValue),
  }) {
    assert(unexpectedValueError != null);
    assert(invalidEmail != null);
    assert(invalidString != null);
    assert(invalidURL != null);
    assert(invalidPhoneNumber != null);
    return invalidPhoneNumber(failedValue);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object>({
    TResult unexpectedValueError(T failedValue),
    TResult invalidEmail(T failedValue),
    TResult invalidString(T failedValue),
    TResult invalidURL(T failedValue),
    TResult invalidPhoneNumber(T failedValue),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (invalidPhoneNumber != null) {
      return invalidPhoneNumber(failedValue);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object>({
    @required TResult unexpectedValueError(UnexpectedValueError<T> value),
    @required TResult invalidEmail(InvalidEmail<T> value),
    @required TResult invalidString(InvalidString<T> value),
    @required TResult invalidURL(InvalidURL<T> value),
    @required TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
  }) {
    assert(unexpectedValueError != null);
    assert(invalidEmail != null);
    assert(invalidString != null);
    assert(invalidURL != null);
    assert(invalidPhoneNumber != null);
    return invalidPhoneNumber(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object>({
    TResult unexpectedValueError(UnexpectedValueError<T> value),
    TResult invalidEmail(InvalidEmail<T> value),
    TResult invalidString(InvalidString<T> value),
    TResult invalidURL(InvalidURL<T> value),
    TResult invalidPhoneNumber(InvalidPhoneNumber<T> value),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (invalidPhoneNumber != null) {
      return invalidPhoneNumber(this);
    }
    return orElse();
  }
}

abstract class InvalidPhoneNumber<T> implements ValueFailure<T> {
  const factory InvalidPhoneNumber({@required T failedValue}) =
      _$InvalidPhoneNumber<T>;

  @override
  T get failedValue;
  @override
  @JsonKey(ignore: true)
  $InvalidPhoneNumberCopyWith<T, InvalidPhoneNumber<T>> get copyWith;
}
