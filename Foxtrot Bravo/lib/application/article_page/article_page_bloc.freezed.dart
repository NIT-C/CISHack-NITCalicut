// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies

part of 'article_page_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

/// @nodoc
class _$ArticlePageEventTearOff {
  const _$ArticlePageEventTearOff();

// ignore: unused_element
  InitialEvent initialEvent(String articleId) {
    return InitialEvent(
      articleId,
    );
  }
}

/// @nodoc
// ignore: unused_element
const $ArticlePageEvent = _$ArticlePageEventTearOff();

/// @nodoc
mixin _$ArticlePageEvent {
  String get articleId;

  @optionalTypeArgs
  TResult when<TResult extends Object>({
    @required TResult initialEvent(String articleId),
  });
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object>({
    TResult initialEvent(String articleId),
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

  @JsonKey(ignore: true)
  $ArticlePageEventCopyWith<ArticlePageEvent> get copyWith;
}

/// @nodoc
abstract class $ArticlePageEventCopyWith<$Res> {
  factory $ArticlePageEventCopyWith(
          ArticlePageEvent value, $Res Function(ArticlePageEvent) then) =
      _$ArticlePageEventCopyWithImpl<$Res>;
  $Res call({String articleId});
}

/// @nodoc
class _$ArticlePageEventCopyWithImpl<$Res>
    implements $ArticlePageEventCopyWith<$Res> {
  _$ArticlePageEventCopyWithImpl(this._value, this._then);

  final ArticlePageEvent _value;
  // ignore: unused_field
  final $Res Function(ArticlePageEvent) _then;

  @override
  $Res call({
    Object articleId = freezed,
  }) {
    return _then(_value.copyWith(
      articleId: articleId == freezed ? _value.articleId : articleId as String,
    ));
  }
}

/// @nodoc
abstract class $InitialEventCopyWith<$Res>
    implements $ArticlePageEventCopyWith<$Res> {
  factory $InitialEventCopyWith(
          InitialEvent value, $Res Function(InitialEvent) then) =
      _$InitialEventCopyWithImpl<$Res>;
  @override
  $Res call({String articleId});
}

/// @nodoc
class _$InitialEventCopyWithImpl<$Res>
    extends _$ArticlePageEventCopyWithImpl<$Res>
    implements $InitialEventCopyWith<$Res> {
  _$InitialEventCopyWithImpl(
      InitialEvent _value, $Res Function(InitialEvent) _then)
      : super(_value, (v) => _then(v as InitialEvent));

  @override
  InitialEvent get _value => super._value as InitialEvent;

  @override
  $Res call({
    Object articleId = freezed,
  }) {
    return _then(InitialEvent(
      articleId == freezed ? _value.articleId : articleId as String,
    ));
  }
}

/// @nodoc
class _$InitialEvent implements InitialEvent {
  const _$InitialEvent(this.articleId) : assert(articleId != null);

  @override
  final String articleId;

  @override
  String toString() {
    return 'ArticlePageEvent.initialEvent(articleId: $articleId)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other is InitialEvent &&
            (identical(other.articleId, articleId) ||
                const DeepCollectionEquality()
                    .equals(other.articleId, articleId)));
  }

  @override
  int get hashCode =>
      runtimeType.hashCode ^ const DeepCollectionEquality().hash(articleId);

  @JsonKey(ignore: true)
  @override
  $InitialEventCopyWith<InitialEvent> get copyWith =>
      _$InitialEventCopyWithImpl<InitialEvent>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object>({
    @required TResult initialEvent(String articleId),
  }) {
    assert(initialEvent != null);
    return initialEvent(articleId);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object>({
    TResult initialEvent(String articleId),
    @required TResult orElse(),
  }) {
    assert(orElse != null);
    if (initialEvent != null) {
      return initialEvent(articleId);
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

abstract class InitialEvent implements ArticlePageEvent {
  const factory InitialEvent(String articleId) = _$InitialEvent;

  @override
  String get articleId;
  @override
  @JsonKey(ignore: true)
  $InitialEventCopyWith<InitialEvent> get copyWith;
}

/// @nodoc
class _$ArticlePageStateTearOff {
  const _$ArticlePageStateTearOff();

// ignore: unused_element
  _ArticlePageState call({@required Option<Article> article}) {
    return _ArticlePageState(
      article: article,
    );
  }
}

/// @nodoc
// ignore: unused_element
const $ArticlePageState = _$ArticlePageStateTearOff();

/// @nodoc
mixin _$ArticlePageState {
  Option<Article> get article;

  @JsonKey(ignore: true)
  $ArticlePageStateCopyWith<ArticlePageState> get copyWith;
}

/// @nodoc
abstract class $ArticlePageStateCopyWith<$Res> {
  factory $ArticlePageStateCopyWith(
          ArticlePageState value, $Res Function(ArticlePageState) then) =
      _$ArticlePageStateCopyWithImpl<$Res>;
  $Res call({Option<Article> article});
}

/// @nodoc
class _$ArticlePageStateCopyWithImpl<$Res>
    implements $ArticlePageStateCopyWith<$Res> {
  _$ArticlePageStateCopyWithImpl(this._value, this._then);

  final ArticlePageState _value;
  // ignore: unused_field
  final $Res Function(ArticlePageState) _then;

  @override
  $Res call({
    Object article = freezed,
  }) {
    return _then(_value.copyWith(
      article: article == freezed ? _value.article : article as Option<Article>,
    ));
  }
}

/// @nodoc
abstract class _$ArticlePageStateCopyWith<$Res>
    implements $ArticlePageStateCopyWith<$Res> {
  factory _$ArticlePageStateCopyWith(
          _ArticlePageState value, $Res Function(_ArticlePageState) then) =
      __$ArticlePageStateCopyWithImpl<$Res>;
  @override
  $Res call({Option<Article> article});
}

/// @nodoc
class __$ArticlePageStateCopyWithImpl<$Res>
    extends _$ArticlePageStateCopyWithImpl<$Res>
    implements _$ArticlePageStateCopyWith<$Res> {
  __$ArticlePageStateCopyWithImpl(
      _ArticlePageState _value, $Res Function(_ArticlePageState) _then)
      : super(_value, (v) => _then(v as _ArticlePageState));

  @override
  _ArticlePageState get _value => super._value as _ArticlePageState;

  @override
  $Res call({
    Object article = freezed,
  }) {
    return _then(_ArticlePageState(
      article: article == freezed ? _value.article : article as Option<Article>,
    ));
  }
}

/// @nodoc
class _$_ArticlePageState implements _ArticlePageState {
  const _$_ArticlePageState({@required this.article}) : assert(article != null);

  @override
  final Option<Article> article;

  @override
  String toString() {
    return 'ArticlePageState(article: $article)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other is _ArticlePageState &&
            (identical(other.article, article) ||
                const DeepCollectionEquality().equals(other.article, article)));
  }

  @override
  int get hashCode =>
      runtimeType.hashCode ^ const DeepCollectionEquality().hash(article);

  @JsonKey(ignore: true)
  @override
  _$ArticlePageStateCopyWith<_ArticlePageState> get copyWith =>
      __$ArticlePageStateCopyWithImpl<_ArticlePageState>(this, _$identity);
}

abstract class _ArticlePageState implements ArticlePageState {
  const factory _ArticlePageState({@required Option<Article> article}) =
      _$_ArticlePageState;

  @override
  Option<Article> get article;
  @override
  @JsonKey(ignore: true)
  _$ArticlePageStateCopyWith<_ArticlePageState> get copyWith;
}
