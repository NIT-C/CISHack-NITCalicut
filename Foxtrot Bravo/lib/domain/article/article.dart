import 'package:flutter/foundation.dart';
import 'package:foxtrot/domain/author/author.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'article.freezed.dart';
part 'article.g.dart';

@freezed
abstract class Article with _$Article {
  const factory Article({
    @required String id,
    @required String title,
    @required String subtitle,
    @required String htmlText,
    @required Author author,
    @required int upVotes,
    @required int downVotes,
  }) = _Article;

  factory Article.fromJson(Map<String, dynamic> json) =>
      _$ArticleFromJson(json);
}
