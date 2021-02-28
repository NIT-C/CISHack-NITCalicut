import 'package:freezed_annotation/freezed_annotation.dart';

part 'author.freezed.dart';
part 'author.g.dart';

@freezed
abstract class Author with _$Author {
  const factory Author({
    @required String name,
    @required String uid,
  }) = _Author;

  factory Author.fromJson(Map<String, dynamic> json) => _$AuthorFromJson(json);
}
