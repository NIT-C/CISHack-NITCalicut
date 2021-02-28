// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies

part of 'article.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;
Article _$ArticleFromJson(Map<String, dynamic> json) {
  return _Article.fromJson(json);
}

/// @nodoc
class _$ArticleTearOff {
  const _$ArticleTearOff();

// ignore: unused_element
  _Article call(
      {@required String id,
      @required String title,
      @required String subtitle,
      @required String htmlText,
      @required Author author,
      @required int upVotes,
      @required int downVotes}) {
    return _Article(
      id: id,
      title: title,
      subtitle: subtitle,
      htmlText: htmlText,
      author: author,
      upVotes: upVotes,
      downVotes: downVotes,
    );
  }

// ignore: unused_element
  Article fromJson(Map<String, Object> json) {
    return Article.fromJson(json);
  }
}

/// @nodoc
// ignore: unused_element
const $Article = _$ArticleTearOff();

/// @nodoc
mixin _$Article {
  String get id;
  String get title;
  String get subtitle;
  String get htmlText;
  Author get author;
  int get upVotes;
  int get downVotes;

  Map<String, dynamic> toJson();
  @JsonKey(ignore: true)
  $ArticleCopyWith<Article> get copyWith;
}

/// @nodoc
abstract class $ArticleCopyWith<$Res> {
  factory $ArticleCopyWith(Article value, $Res Function(Article) then) =
      _$ArticleCopyWithImpl<$Res>;
  $Res call(
      {String id,
      String title,
      String subtitle,
      String htmlText,
      Author author,
      int upVotes,
      int downVotes});

  $AuthorCopyWith<$Res> get author;
}

/// @nodoc
class _$ArticleCopyWithImpl<$Res> implements $ArticleCopyWith<$Res> {
  _$ArticleCopyWithImpl(this._value, this._then);

  final Article _value;
  // ignore: unused_field
  final $Res Function(Article) _then;

  @override
  $Res call({
    Object id = freezed,
    Object title = freezed,
    Object subtitle = freezed,
    Object htmlText = freezed,
    Object author = freezed,
    Object upVotes = freezed,
    Object downVotes = freezed,
  }) {
    return _then(_value.copyWith(
      id: id == freezed ? _value.id : id as String,
      title: title == freezed ? _value.title : title as String,
      subtitle: subtitle == freezed ? _value.subtitle : subtitle as String,
      htmlText: htmlText == freezed ? _value.htmlText : htmlText as String,
      author: author == freezed ? _value.author : author as Author,
      upVotes: upVotes == freezed ? _value.upVotes : upVotes as int,
      downVotes: downVotes == freezed ? _value.downVotes : downVotes as int,
    ));
  }

  @override
  $AuthorCopyWith<$Res> get author {
    if (_value.author == null) {
      return null;
    }
    return $AuthorCopyWith<$Res>(_value.author, (value) {
      return _then(_value.copyWith(author: value));
    });
  }
}

/// @nodoc
abstract class _$ArticleCopyWith<$Res> implements $ArticleCopyWith<$Res> {
  factory _$ArticleCopyWith(_Article value, $Res Function(_Article) then) =
      __$ArticleCopyWithImpl<$Res>;
  @override
  $Res call(
      {String id,
      String title,
      String subtitle,
      String htmlText,
      Author author,
      int upVotes,
      int downVotes});

  @override
  $AuthorCopyWith<$Res> get author;
}

/// @nodoc
class __$ArticleCopyWithImpl<$Res> extends _$ArticleCopyWithImpl<$Res>
    implements _$ArticleCopyWith<$Res> {
  __$ArticleCopyWithImpl(_Article _value, $Res Function(_Article) _then)
      : super(_value, (v) => _then(v as _Article));

  @override
  _Article get _value => super._value as _Article;

  @override
  $Res call({
    Object id = freezed,
    Object title = freezed,
    Object subtitle = freezed,
    Object htmlText = freezed,
    Object author = freezed,
    Object upVotes = freezed,
    Object downVotes = freezed,
  }) {
    return _then(_Article(
      id: id == freezed ? _value.id : id as String,
      title: title == freezed ? _value.title : title as String,
      subtitle: subtitle == freezed ? _value.subtitle : subtitle as String,
      htmlText: htmlText == freezed ? _value.htmlText : htmlText as String,
      author: author == freezed ? _value.author : author as Author,
      upVotes: upVotes == freezed ? _value.upVotes : upVotes as int,
      downVotes: downVotes == freezed ? _value.downVotes : downVotes as int,
    ));
  }
}

@JsonSerializable()

/// @nodoc
class _$_Article with DiagnosticableTreeMixin implements _Article {
  const _$_Article(
      {@required this.id,
      @required this.title,
      @required this.subtitle,
      @required this.htmlText,
      @required this.author,
      @required this.upVotes,
      @required this.downVotes})
      : assert(id != null),
        assert(title != null),
        assert(subtitle != null),
        assert(htmlText != null),
        assert(author != null),
        assert(upVotes != null),
        assert(downVotes != null);

  factory _$_Article.fromJson(Map<String, dynamic> json) =>
      _$_$_ArticleFromJson(json);

  @override
  final String id;
  @override
  final String title;
  @override
  final String subtitle;
  @override
  final String htmlText;
  @override
  final Author author;
  @override
  final int upVotes;
  @override
  final int downVotes;

  @override
  String toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) {
    return 'Article(id: $id, title: $title, subtitle: $subtitle, htmlText: $htmlText, author: $author, upVotes: $upVotes, downVotes: $downVotes)';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
      ..add(DiagnosticsProperty('type', 'Article'))
      ..add(DiagnosticsProperty('id', id))
      ..add(DiagnosticsProperty('title', title))
      ..add(DiagnosticsProperty('subtitle', subtitle))
      ..add(DiagnosticsProperty('htmlText', htmlText))
      ..add(DiagnosticsProperty('author', author))
      ..add(DiagnosticsProperty('upVotes', upVotes))
      ..add(DiagnosticsProperty('downVotes', downVotes));
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other is _Article &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.title, title) ||
                const DeepCollectionEquality().equals(other.title, title)) &&
            (identical(other.subtitle, subtitle) ||
                const DeepCollectionEquality()
                    .equals(other.subtitle, subtitle)) &&
            (identical(other.htmlText, htmlText) ||
                const DeepCollectionEquality()
                    .equals(other.htmlText, htmlText)) &&
            (identical(other.author, author) ||
                const DeepCollectionEquality().equals(other.author, author)) &&
            (identical(other.upVotes, upVotes) ||
                const DeepCollectionEquality()
                    .equals(other.upVotes, upVotes)) &&
            (identical(other.downVotes, downVotes) ||
                const DeepCollectionEquality()
                    .equals(other.downVotes, downVotes)));
  }

  @override
  int get hashCode =>
      runtimeType.hashCode ^
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(title) ^
      const DeepCollectionEquality().hash(subtitle) ^
      const DeepCollectionEquality().hash(htmlText) ^
      const DeepCollectionEquality().hash(author) ^
      const DeepCollectionEquality().hash(upVotes) ^
      const DeepCollectionEquality().hash(downVotes);

  @JsonKey(ignore: true)
  @override
  _$ArticleCopyWith<_Article> get copyWith =>
      __$ArticleCopyWithImpl<_Article>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$_$_ArticleToJson(this);
  }
}

abstract class _Article implements Article {
  const factory _Article(
      {@required String id,
      @required String title,
      @required String subtitle,
      @required String htmlText,
      @required Author author,
      @required int upVotes,
      @required int downVotes}) = _$_Article;

  factory _Article.fromJson(Map<String, dynamic> json) = _$_Article.fromJson;

  @override
  String get id;
  @override
  String get title;
  @override
  String get subtitle;
  @override
  String get htmlText;
  @override
  Author get author;
  @override
  int get upVotes;
  @override
  int get downVotes;
  @override
  @JsonKey(ignore: true)
  _$ArticleCopyWith<_Article> get copyWith;
}
