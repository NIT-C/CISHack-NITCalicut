// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies

part of 'dashboard_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

/// @nodoc
class _$DashboardEventTearOff {
  const _$DashboardEventTearOff();

// ignore: unused_element
  InitialEvent initialEvent() {
    return const InitialEvent();
  }
}

/// @nodoc
// ignore: unused_element
const $DashboardEvent = _$DashboardEventTearOff();

/// @nodoc
mixin _$DashboardEvent {
  @optionalTypeArgs
  TResult when<TResult extends Object>({
    @required TResult initialEvent(),
  });
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object>({
    TResult initialEvent(),
    @required TResult orElse(),
  });
  @optionalTypeArgs
  TResult map<TResult extends Object>({
    @required TResult initialEvent(InitialEvent value),
  });
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object>({
    TResult initialEvent(InitialEvent value),
    @required TResult orElse(),
  });
}

/// @nodoc
abstract class $DashboardEventCopyWith<$Res> {
  factory $DashboardEventCopyWith(
          DashboardEvent value, $Res Function(DashboardEvent) then) =
      _$DashboardEventCopyWithImpl<$Res>;
}

/// @nodoc
class _$DashboardEventCopyWithImpl<$Res>
    implements $DashboardEventCopyWith<$Res> {
  _$DashboardEventCopyWithImpl(this._value, this._then);

  final DashboardEvent _value;
  // ignore: unused_field
  final $Res Function(DashboardEvent) _then;
}

/// @nodoc
abstract class $InitialEventCopyWith<$Res> {
  factory $InitialEventCopyWith(
          InitialEvent value, $Res Function(InitialEvent) then) =
      _$InitialEventCopyWithImpl<$Res>;
}

/// @nodoc
class _$InitialEventCopyWithImpl<$Res>
    extends _$DashboardEventCopyWithImpl<$Res>
    implements $InitialEventCopyWith<$Res> {
  _$InitialEventCopyWithImpl(
      InitialEvent _value, $Res Function(InitialEvent) _then)
      : super(_value, (v) => _then(v as InitialEvent));

  @override
  InitialEvent get _value => super._value as InitialEvent;
}

/// @nodoc
class _$InitialEvent implements InitialEvent {
  const _$InitialEvent();

  @override
  String toString() {
    return 'DashboardEvent.initialEvent()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) || (other is InitialEvent);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object>({
    @required TResult initialEvent(),
  }) {
    assert(initialEvent != null);
    return initialEvent();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object>({
    TResult initialEvent(),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (initialEvent != null) {
      return initialEvent();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object>({
    @required TResult initialEvent(InitialEvent value),
  }) {
    assert(initialEvent != null);
    return initialEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object>({
    TResult initialEvent(InitialEvent value),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (initialEvent != null) {
      return initialEvent(this);
    }
    return orElse();
  }
}

abstract class InitialEvent implements DashboardEvent {
  const factory InitialEvent() = _$InitialEvent;
}

/// @nodoc
class _$DashboardStateTearOff {
  const _$DashboardStateTearOff();

// ignore: unused_element
  _DashboardState call({@required Option<List<Article>> articles}) {
    return _DashboardState(
      articles: articles,
    );
  }
}

/// @nodoc
// ignore: unused_element
const $DashboardState = _$DashboardStateTearOff();

/// @nodoc
mixin _$DashboardState {
  Option<List<Article>> get articles;

  @JsonKey(ignore: true)
  $DashboardStateCopyWith<DashboardState> get copyWith;
}

/// @nodoc
abstract class $DashboardStateCopyWith<$Res> {
  factory $DashboardStateCopyWith(
          DashboardState value, $Res Function(DashboardState) then) =
      _$DashboardStateCopyWithImpl<$Res>;
  $Res call({Option<List<Article>> articles});
}

/// @nodoc
class _$DashboardStateCopyWithImpl<$Res>
    implements $DashboardStateCopyWith<$Res> {
  _$DashboardStateCopyWithImpl(this._value, this._then);

  final DashboardState _value;
  // ignore: unused_field
  final $Res Function(DashboardState) _then;

  @override
  $Res call({
    Object articles = freezed,
  }) {
    return _then(_value.copyWith(
      articles: articles == freezed
          ? _value.articles
          : articles as Option<List<Article>>,
    ));
  }
}

/// @nodoc
abstract class _$DashboardStateCopyWith<$Res>
    implements $DashboardStateCopyWith<$Res> {
  factory _$DashboardStateCopyWith(
          _DashboardState value, $Res Function(_DashboardState) then) =
      __$DashboardStateCopyWithImpl<$Res>;
  @override
  $Res call({Option<List<Article>> articles});
}

/// @nodoc
class __$DashboardStateCopyWithImpl<$Res>
    extends _$DashboardStateCopyWithImpl<$Res>
    implements _$DashboardStateCopyWith<$Res> {
  __$DashboardStateCopyWithImpl(
      _DashboardState _value, $Res Function(_DashboardState) _then)
      : super(_value, (v) => _then(v as _DashboardState));

  @override
  _DashboardState get _value => super._value as _DashboardState;

  @override
  $Res call({
    Object articles = freezed,
  }) {
    return _then(_DashboardState(
      articles: articles == freezed
          ? _value.articles
          : articles as Option<List<Article>>,
    ));
  }
}

/// @nodoc
class _$_DashboardState implements _DashboardState {
  const _$_DashboardState({@required this.articles}) : assert(articles != null);

  @override
  final Option<List<Article>> articles;

  @override
  String toString() {
    return 'DashboardState(articles: $articles)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other is _DashboardState &&
            (identical(other.articles, articles) ||
                const DeepCollectionEquality()
                    .equals(other.articles, articles)));
  }

  @override
  int get hashCode =>
      runtimeType.hashCode ^ const DeepCollectionEquality().hash(articles);

  @JsonKey(ignore: true)
  @override
  _$DashboardStateCopyWith<_DashboardState> get copyWith =>
      __$DashboardStateCopyWithImpl<_DashboardState>(this, _$identity);
}

abstract class _DashboardState implements DashboardState {
  const factory _DashboardState({@required Option<List<Article>> articles}) =
      _$_DashboardState;

  @override
  Option<List<Article>> get articles;
  @override
  @JsonKey(ignore: true)
  _$DashboardStateCopyWith<_DashboardState> get copyWith;
}
